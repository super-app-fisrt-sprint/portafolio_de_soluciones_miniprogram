module.exports.getEmpresasVideos = getEmpresasVideos;

function getEmpresasVideos(url, headers) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'GET',
      dataType: 'json',
      headers: headers,
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}