const GetCompaniesVideosDataSourceRemote = require('../dataSource/GetCompaniesVideosDataSourceRemote.js');
const companiesVideosDataSourceRemote = new GetCompaniesVideosDataSourceRemote();

module.exports = class CompaniesVideosRepository {
  static instance;
  constructor() {
    if (CompaniesVideosRepository.instance) {
      return CompaniesVideosRepository.instance;
    } else {
      CompaniesVideosRepository.instance = this;
    }
  }
  async getCompaniesVideosRemote() {
    return await companiesVideosDataSourceRemote.getCompaniesVideos();
  }
};
