const getEmpresasVideos = require('../source/EmpresasVideosRemote');
const APIs = require('../../../config/remote/APIs');

module.exports = class getEmpresasVideosDataSourceRemote {
  static instance;
  constructor() {
    if(getEmpresasVideosDataSourceRemote.instance){
      return getEmpresasVideosDataSourceRemote.instance;
    }else{
      getEmpresasVideosDataSourceRemote.instance = this;
    }
  }
  async getEmpresasVideos(){
    return await getEmpresasVideos.getEmpresasVideos(APIs.URL_BASE.EMPRESAS_VIDEOS, APIs.HEADERS)
  }
}
