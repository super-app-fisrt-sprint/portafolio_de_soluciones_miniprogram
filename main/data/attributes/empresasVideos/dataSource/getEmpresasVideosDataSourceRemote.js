const getEmpresasVideos = require('../source/EmpresasVideosRemote');
const APIs = require('../../../config/remote/APIs');

module.exports = class GetEmpresasVideosDataSourceRemote {
  static instance;
  constructor() {
    if(GetEmpresasVideosDataSourceRemote.instance){
      return GetEmpresasVideosDataSourceRemote.instance;
    }else{
      GetEmpresasVideosDataSourceRemote.instance = this;
    }
  }
  async getEmpresasVideos(){
    return await getEmpresasVideos.getEmpresasVideos(APIs.URL_BASE.EMPRESAS_VIDEOS, APIs.HEADERS)
  }
}
