class WebMessage {
   constructor(userId,type,token) {
     this.userId=userId
     this.type=type;
     this.token=token;
   }
   setType(type){
     this.type=type
   }
   getType(){
     return  this.type
   }


}
module.exports=WebMessage;
