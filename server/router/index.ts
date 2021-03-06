import router from "koa-router";
const rout = new router<{}, KoaCtx>()
import nodeApi from "./node";
import Auth from "./auth";
import APPs from "./app";
import WX from "./wx"
import wxPublic from "./wxPublic";
import Util from "./util";
import OPEN from "./open";
import Ec from "./ec"
import Web from './web'
import Root from "./root"
import { KoaCtx } from "typing";


rout.all("/api/app/:type", APPs);
rout.post("/api/Node/:type", nodeApi);
rout.all("/api/auth/:type", Auth);
rout.all("/api/wx/:type", WX)
rout.all("/api/wxPublic", wxPublic)
rout.all("/api/util/:type1/:type2", Util)
rout.post("/api/open/:type", OPEN)
rout.all("/api/ec/:type", Ec)
rout.all("/api/web/:type", Web)
rout.post("/api/root/:type", Root)

// 微信公众号之前的服务器配置
/* 
url: http://hhd.wxmmd.com/index.php?g=Home&amp;m=Weixin&amp;a=index&amp;token=sjpuhj1467254959
Token :6wF2e3auzFxQP4NamBCw
EncodingAESKey :  jMTwdwFmxqlxnQsMjZfVhIqFcefuRjiKGGtekuNzkxf
*/

export default rout;
