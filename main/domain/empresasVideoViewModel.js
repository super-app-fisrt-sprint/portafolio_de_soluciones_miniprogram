const EmpresasVideoRepository = require('../data/attributes/empresasVideos/repository/EmpresasVideosRepository');
const RequestGetEmpresasVideos = require('../data/attributes/empresasVideos/entities/RequestGetEmpresasVideos');

async function requestGetEmpresasVideos() {
  const empresasVideoRepository = new EmpresasVideoRepository();
  try {
    let res = await empresasVideoRepository.getEmpresasVideosRemote();
    if (
      res &&
      res.data &&
      res.data.error == 0
    ) {
      return new RequestGetEmpresasVideos(res.data.response);
    } else {
      return new RequestGetEmpresasVideos(res.data.response);
    }
  } catch (error) {
    return new RequestGetEmpresasVideos(error);
  }
}

module.exports.requestGetEmpresasVideo = requestGetEmpresasVideos;