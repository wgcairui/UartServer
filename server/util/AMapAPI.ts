import axios from "axios";
import { AMapLoctionCache } from "../mongoose";
import { localToUtc } from "./util";


type apiType = 'ip' | 'geocode/geo' | 'geocode/regeo' | 'assistant/coordinate/convert'

/**
 * AMap高德地图api
 */
class AMapUtil {
    private LoctionCache: Map<string, string>;
    private key: string;
    private ApiAddress: string;
    constructor() {
        this.LoctionCache = new Map()
        this.key = "0e99d0426f1afb11f2b95864ebd898d0"
        this.ApiAddress = "https://restapi.amap.com/v3/"
        AMapLoctionCache.find({}).then(el => {
            el.forEach(({ key, val }) => this.LoctionCache.set(key, val))
        })
    }
    /**
     * ip转gps
     * @param ip 
     */
    async IP2loction(ip: string) {
        if (!this.LoctionCache.has(ip)) {
            const result = await this.fecth<Uart.AMap.ip2parameters>('ip', { ip })
            const loction = result.rectangle.split(";")[0]
            this.saveLoction(ip, loction)
        }
        return this.LoctionCache.get(ip)!
    }

    /**
     *  GPS转高德坐标系
     * @param loctions 经纬度
     * @param coordsys 定位编码
     */
    async GPS2autonavi(loctions: string | string[], coordsys: "gps" | 'mapbar' | 'baidu' = "gps") {
        if (!loctions || loctions === '') return ['']
        const result = await this.fecth<Uart.AMap.convert>('assistant/coordinate/convert', { locations: loctions, coordsys })
        // console.log({ GPS2autonavi: result, locations: loctions, coordsys });
        return result.status === '1' ? result.locations.split(";") : ['']
    }

    /**
     * 保存查询到的缓存
     * @param key 
     * @param val 
     */
    private saveLoction(key: string, val: string) {
        this.LoctionCache.set(key, val)
        AMapLoctionCache.updateOne({ key }, { $set: { val } }, { upsert: true }).exec()
    }
    // axios
    private async fecth<T extends Uart.AMap.statu>(type: apiType, data: { [x: string]: string | string[] }) {
        const res = await axios({
            url: this.ApiAddress + type,
            params: {
                key: this.key,
                ...data
            }
        })
        const result: T = res.data;
        if (result.status === '0') {
            console.log(result);
        }
        return result;
    }
}

export default new AMapUtil()