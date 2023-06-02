const localKeys = require('../local/Keys');

module.exports = class APIs {
  static get URL_BASE(){
    return URL_BASE;
  }
  static get HEADERS(){
    return HEADERS;
  }
}

const URL_BASE = {
  EMPRESAS_VIDEOS: 'https://apiselfservice.co/api/v1/core/web/EmpresasVideos.json'
}

const HEADERS = {
  "X-SESSION-ID": localKeys.TYPE['X-SESSION-ID'],
  "X-MC-MAIL": localKeys.TYPE.EMAIL,
  "X-MC-SO": localKeys.TYPE['X-MC-SO'],
  "X-Carrier": localKeys.TYPE['X-Carrier'],
  "X-Wifi": localKeys.TYPE['X-Wifi'],
  "X-MC-HE-V": localKeys.TYPE['X-MC-HE-V'],
  "X-MC-SO-V": localKeys.TYPE['X-MC-SO-V'],
  "Cache-Control": localKeys.TYPE['Cache-Control'],
  "X-MC-SO-API": localKeys.TYPE['X-MC-SO-API'],
  "X-MC-SO-PHONE-F": localKeys.TYPE['X-MC-SO-PHONE-F'],
  "X-MC-SO-PHONE-M": localKeys.TYPE['X-MC-SO-PHONE-M'],
  "X-MC-APP-V": localKeys.TYPE['X-MC-APP-V'],
  "X-MC-DEVICE-NAME": localKeys.TYPE['X-MC-DEVICE-NAME'],
  "X-MC-DEVICE-ID": localKeys.TYPE['X-MC-DEVICE-ID'],
  "X-MC-USER-AGENT": localKeys.TYPE['X-MC-USER-AGENT']
}