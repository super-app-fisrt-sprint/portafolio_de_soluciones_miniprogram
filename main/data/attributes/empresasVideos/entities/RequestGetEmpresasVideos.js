module.exports = class RequestGetEmpresasVideos {
  static instance;
  constructor (data) {
    this.data = data;
    if(RequestGetEmpresasVideos.instance){
      return RequestGetEmpresasVideos.instance;
    }else {
      RequestGetEmpresasVideos.instance = this;
    }
  }
}