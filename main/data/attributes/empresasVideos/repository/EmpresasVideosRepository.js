const EmpresasVideosDataSourceRemote = require('../dataSource/getEmpresasVideosDataSourceRemote');
const empresasVideosDataSourceRemote = new EmpresasVideosDataSourceRemote();

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
