import io from "socket.io-client"
// import VueSocketIOExt from "vue-socket.io-extended"
import {Context} from "@nuxt/types"

export default (ctx:Context,inject:any) => {
  const host = process.env.NODE_ENV === "production" ?"https://uart.ladishb.com":"http://localhost:9010"
  // 注册socket
  //const token = localStorage.getItem("auth._token.local")
  /* onst socket = io(host, {
    path: "/WebClient",
    query: { token:'' },
    // autoConnect: false
  })
  ctx.app.socket = socket
  Vue.use(VueSocketIOExt, socket, { store: ctx.store }) */
  const socket = io(host, {
    path: "/WebClient",
    query: { token:'' },
    autoConnect: false
  })
  inject('socket',socket)
}
