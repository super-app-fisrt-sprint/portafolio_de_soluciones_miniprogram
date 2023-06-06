const GetEmpresasVideosDataSourceRemote = require('../dataSource/GetEmpresasVideosDataSourceRemote');
const empresasVideosDataSourceRemote = new GetEmpresasVideosDataSourceRemote();

module.exports = class EmpresasVideosRepository {
  static instance;
  constructor() {
    if (EmpresasVideosRepository.instance) {
      return EmpresasVideosRepository.instance;
    } else {
      EmpresasVideosRepository.instance = this;
    }
  }
  async getEmpresasVideosRemote() {
    return await empresasVideosDataSourceRemote.getEmpresasVideos();
  }
};
