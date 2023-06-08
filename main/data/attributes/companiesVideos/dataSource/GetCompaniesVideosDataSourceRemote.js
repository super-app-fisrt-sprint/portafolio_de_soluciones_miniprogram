const companiesVideosRemote = require('../source/CompaniesVideosRemote');
const APIs = require('../../../config/remote/APIs');

module.exports = class GetCompaniesVideosDataSourceRemote {
  static instance;
  constructor() {
    if(GetCompaniesVideosDataSourceRemote.instance){
      return GetCompaniesVideosDataSourceRemote.instance;
    }else{
      GetCompaniesVideosDataSourceRemote.instance = this;
    }
  }
  async getCompaniesVideos(){
    return await companiesVideosRemote.getCompaniesVideos(APIs.URL_BASE.EMPRESAS_VIDEOS, APIs.HEADERS)
  }
}
