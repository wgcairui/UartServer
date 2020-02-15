/** Declaration file generated by dts-gen */
import socketIO from 'socket.io';
import Koa from "koa"
import { KoaSocketOpts } from 'server/bin/interface';



export default koa_socket_2

declare class koa_socket_2 {
    constructor(args: KoaSocketOpts);

    attach(app: Koa<Koa.DefaultState, Koa.DefaultContext>): void;

    attachNamespace(app: Koa<Koa.DefaultState, Koa.DefaultContext>, namespace: string | null): void;

    broadcast(event: string, data: any): void;

    off(event: string, handler: any): this;

    on(event: string, handler: any): this;

    onConnection(...args: any[]): void;

    onDisconnect(...args: any[]): void;

    to(room: string): void;

    updateConnections(...args: any[]): void;

    use(...args: any[]): void;

}
