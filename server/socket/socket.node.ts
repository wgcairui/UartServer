/* eslint-disable no-console */
import IO from "koa-socket-2";
import Event from "../event/index";
import { Socket } from "_@types_socket.io@2.1.4@@types/socket.io";
import { NodeClient,SocketRegisterInfo } from "../bin/interface";

export default class socket extends IO {
  // 挂载
  attach(app:any) {
    super.attach(app);
    this.start();
  }

  start() {
    this.on("register", this._onRegister) // 节点注册效验
      .on("Alarm", this._Alarm) // 节点报警
      .on("disconnect", this._delDisconnect); // 节点离线
  }

  _onRegister({ socket, data }: { socket: Socket; data: SocketRegisterInfo }) {
    const IP = socket.conn.remoteAddress;
    if (!Event.nodeIPSocketIDMaps.has(IP)) {
      console.log(`有未登记节点连接，节点注册信息`);
      console.log(IP);
    } else {
      //
      const Info = <NodeClient>Event.nodeRegisterInfo.get(IP);
      Event.emit(Event.env.connectNodeClient, { IP, socket, data });

      const { hostname, totalmem, freemem, loadavg, type, uptime } = data;
      console.log(data);

      console.log(`节点注册：${Info.Name}==${IP}`);
      console.log(`注册时间:${new Date()}`);
      console.log(`id<${socket.id}>已连接,\n节点名称：<${hostname}>`);
      console.log(`内存总量：<${totalmem}>`);
      console.log(`已使用:<${freemem}>`);
      console.log(`平均负载(/1/5/15min)：<${loadavg}>`);
      console.log(`已运行时间:<${uptime}>`);
      console.log(`系统类型:<${type}>`);
    }
  }

  _Alarm({ socket, data }: { socket: Socket; data: any }) {
    const IP = socket.conn.remoteAddress;
    console.log(data);
    console.log(IP);
  }

  _delDisconnect({ socket }: { socket: Socket }) {
    const IP = socket.conn.remoteAddress;
    console.log(
      `节点：${(<NodeClient>Event.nodeRegisterInfo.get(IP)).Name}断开连接，清除定时操作`
    );
    Event.emit(Event.env.disNodeClient, { IP, socket });
  }
}
