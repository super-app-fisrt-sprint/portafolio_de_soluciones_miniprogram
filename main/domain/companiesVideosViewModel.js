const CompaniesVideosRepository = require('../data/attributes/companiesVideos/repository/CompaniesVideosRepository.js');
const RequestGetCompaniesVideos = require('../data/attributes/companiesVideos/entities/RequestGetCompaniesVideos.js');

async function requestGetComapaniesVideos() {
  const companiesVideosRepository = new CompaniesVideosRepository();
  try {
    let res = await companiesVideosRepository.getCompaniesVideosRemote();
    if (
      res &&
      res.data &&
      res.data.error == 0
    ) {
      return new RequestGetCompaniesVideos(res.data.response);
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

module.exports.requestGetComapaniesVideos = requestGetComapaniesVideos;