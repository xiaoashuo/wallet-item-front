import SocketMessage from "./socket-message";
import {Message_Type} from "./socket-constants";
import store from "../store";

let Socket = ''
let reconnectUrl = ''
let heartbeatIntervalId = null
export const createSocket = url => {
  Socket && Socket.close()
  if (!Socket) {
    console.log("建立websocket连接")
    Socket = new WebSocket(url)
    reconnectUrl = url
    Socket.onopen = openWs
    Socket.onmessage = receiveMessage
    Socket.onerror = catchError
    Socket.onclose = closeWs
  } else {
    console.log("websocket已连接")
  }
}
/**
 * 发送数据 但连接未建立时 进行处理等待重发
 * @param message
 */
export const sendMessage = message => {
  if (Socket != null && Socket.readyState === 3) {
    Socket.close()
    createSocket(reconnectUrl)
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(message))
  } else if (Socket.readyState === 0) {
    connecting(message)
  }
}
/**
 * 发送数据 但连接未建立时 进行处理等待重发
 * @param message
 */
const connecting = message => {
  setTimeout(() => {
    if (Socket.readyState === 0) {
      connecting(message)
    } else {
      Socket.send(JSON.stringify(message))
    }
  }, 1000)
}
/**发送心跳*/
const openWs = () => {
  sendPing()
  sendMessage(new SocketMessage(store.getters.getUserInfo.id, Message_Type.register, "注册管道"))

}
const closeWs = () => {
  clearInterval(heartbeatIntervalId)
  console.log("websocket已断开...正在尝试重连")
  console.log(Socket.readyState)
  if (Socket.readyState !== 2) {
    Socket = null
    createSocket(reconnectUrl)
  }
}
/** ws 数据接收统一处理*/
const receiveMessage = e => {
  window.dispatchEvent(new CustomEvent("receiveMessage", {
    detail: {
      data: e.data
    }
  }))
}

const catchError = () => {
  Socket.close()
  clearInterval(heartbeatIntervalId)
  console.log("连接失败重连中")
  if (Socket.readyState !== 3) {
    Socket = null
    createSocket(reconnectUrl)
  }
}
/**
 * 发送心跳
 * @param time
 * @param userId
 * @param data
 */
export const sendPing = (time = 5000, data = "ping") => {
  console.log("发送心跳")
  //clearInterval(heartbeatIntervalId)
  const webMessage = JSON.stringify(new SocketMessage(store.getters.getUserInfo.id, Message_Type.heart, data));
  Socket.send(webMessage)
  heartbeatIntervalId = setInterval(() => {
    Socket.send(webMessage)
  }, time)
}

export const closeWebSocket = () => {
  Socket && Socket.close()
}
// webSocket的readyState属性用来定义连接状态，该属性的值有下面几种：
//
// 0 ：对应常量CONNECTING (numeric value 0)，
// 正在建立连接连接，还没有完成。The connection has not yet been established.
// 1 ：对应常量OPEN (numeric value 1)，
// 连接成功建立，可以进行通信。The WebSocket connection is established and communication is possible.
// 2 ：对应常量CLOSING (numeric value 2)
// 连接正在进行关闭握手，即将关闭。The connection is going through the closing handshake.
// 3 : 对应常量CLOSED (numeric value 3)
// 连接已经关闭或者根本没有建立。The connection has been closed or could not be opened.
