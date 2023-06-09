const companiesVideosViewModel = require('../../../domain/companiesVideosViewModel.js');

let app = getApp();

Page({
  data: {
    solutions: [],
    urlTag: '/main/ui/assets/icons/solutionsPortafolio/',
    images: [
      'administraciondetunegocio.svg',
      'ico_cloud.svg',
      'ico_internet.svg',
      'ico_iot.svg',
      'ico_minegocio.svg',
      'ico_movil.svg',
      'ico_tv.svg',
      'administracion_lan.svg',
      'servicios_de_datos.svg',
      'servicios_de_internet.svg',
      'servicios_de_it.svg',
      'servicios_iot.svg',
      'servicios_moviles.svg'
    ],
    titleBarHeight: 0,
    statusBarHeight: 0,
    showLoading: false,
    descriptionModalInfo: '',
    showModalDescriptionInfo: false,
    buttonModalDescriptionInfo: '',
    functionModalDescriptionInfo: '',
  },
  async onLoad() {
    const {
      titleBarHeight,
      statusBarHeight,
    } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
    await this.getAsyncInformation();
  },
  async getAsyncInformation() {
    this.showLoading();
    let res = await companiesVideosViewModel.requestGetComapaniesVideos();
    try {
      if (res) {
        res.data.forEach(solution => {
          let reference = solution.icono;
          let indexTag = reference.lastIndexOf('/');
          let icoTag = reference.substring(indexTag + 1).replace('png', 'svg');
          let strImg = this.findImage(icoTag);
          if (strImg) {
            solution.icono = `${this.data.urlTag}${strImg}`;
            solution.link.forEach(hyper => {
              let str = `${this.removeAccents(hyper.nombre.toLowerCase()).replaceAll(' ','_')}.svg`;
              let strLink = this.findImage(str)
              if (str === strLink) {
                hyper.icoBtn = `${this.data.urlTag}${strLink}`
              } else {
                hyper.icoBtn = `${this.data.urlTag}${strImg}`
              }
            });
          }
        });
        this.setData({
          solutions: res.data
        });
        this.hideLoading();
      } else {
        this.setData({
          descriptionModalInfo: 'Ocurrió un error en la respuesta del servidor. Por favor, vuelve a intentarlo más tarde.',
          buttonModalDescriptionInfo: 'Cerrar',
          functionModalDescriptionInfo: 'handleClose',
          showModalDescriptionInfo: true
        });
        this.hideLoading();
      }
    } catch (error) {
      this.setData({
        descriptionModalInfo: 'Ocurrió un error en la respuesta del servidor. Por favor, vuelve a intentarlo más tarde.',
        buttonModalDescriptionInfo: 'Cerrar',
        functionModalDescriptionInfo: 'handleClose',
        showModalDescriptionInfo: true
      });
      this.hideLoading();
    }
  },
  onService(e) {
    my.navigateTo({
      url: `/main/ui/pages/purchaseProduct/purchaseProduct`
    });
  },
  onSolution(e) {
    let solutionId = e.currentTarget.dataset.index;
    my.navigateTo({
      url: `/main/ui/pages/solution/solution?solutions=${JSON.stringify(this.data.solutions)}&idSolution=${solutionId}`
    })
  },
  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false
    });
  },
  handleClose() {
    this.setData({
      showModalDescriptionInfo: false
    });
  },
  removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },
  findImage(icoTag) {
    return this.data.images.find(item => item === icoTag);
  }
});