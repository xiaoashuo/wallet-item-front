import WebMessage from './WebMessage'

export class WebSocketUtil {
  constructor() {
    //链接url
    this.url = null
    //websocket 实例
    this.ws = null
    //心跳标志id
    this.hearBeatIntervalId = null
  }

  /**
   * 得到ws对象
   * @returns {null}
   */
  getWsInstance() {
    return this.ws
  }

  initWebSocket(url) {
    if ('WebSocket' in window) {
      this.url = url
      this.connectWebSocket()

      this.ws.onopen = (evt) => {
        this.openWebsocket(evt)
      }
      this.ws.onmessage = (e) => {
        this.receiveMessage(e)
      }
      this.ws.onclose = (evt) => {
        this.closeWebSocket(evt)
      }
      this.ws.onerror = (ws) => {
        this.errorWebSocket(ws)
      }
      //开启心跳
      this.openHearBeat()

    } else {
      alert("浏览器不支持websocket")
    }
  }

  connectWebSocket() {
    this.ws = new WebSocket(this.url)
  }


  /**
   * 打开websocket事件
   * @param evt
   */
  openWebsocket(evt) {
    console.log(evt)
    console.log("websocket 开启")
  }

  /**
   * 关闭websocket事件
   * @param evt
   */
  closeWebSocket(evt) {
    console.log(evt);
    console.log("websocket 关闭")
    this.resetWebSocket()
  }

  /**
   * 接收消息
   * @param e
   */
  receiveMessage(e) {
    console.log(e)
    console.log("成功接收到消息")
  }

  /**
   * 错误websocket事件
   * @param ws
   */
  errorWebSocket(ws) {
    console.log(ws)
    console.log("websocket发生异常")
    // this.resetWebSocket()
  }

  /**
   * 重制websocket 事件
   */
  resetWebSocket() {
    console.log("重置websocket");
    //清除心跳
    this.closeHearBeat()

    //释放对象
    this.ws = null

  }

  /**
   * 发送数据
   * @param data
   */
  sendData(data) {
    this.ws.send(data)
  }

  /**
   * 打开心跳
   */
  openHearBeat() {
    if (this.ws != null) {
      const webMessage = JSON.stringify(new WebMessage(1, 3, "123"));
      this.hearBeatIntervalId = setInterval(() => {
        console.log("心跳执行")
        this.sendData(webMessage)
      }, 3000)
    }
  }

  /**
   * 关闭心跳
   */
  closeHearBeat() {
    if (this.hearBeatIntervalId != null) {
      clearInterval(this.hearBeatIntervalId)
    }
  }


}
