class SocketMessage {
  constructor(userId, type, data) {
    this.userId = userId
    this.type = type;
    this.data = data;
  }

  setType(type) {
    this.type = type
  }

  getType() {
    return this.type
  }


}

module.exports = SocketMessage;
