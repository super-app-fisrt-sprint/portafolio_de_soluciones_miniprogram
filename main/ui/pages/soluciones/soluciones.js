const empresasVideoViewModel = require('../../../domain/empresasVideoViewModel');

Page({
  data: {
    solutions: [],
    urlTag: '/main/ui/assets/icons/solutionsPortafolio/',
    images: [
      'administraciondetunegocio.png',
      'ico_cloud.png',
      'ico_internet.png',
      'ico_iot.png',
      'ico_minegocio.png',
      'ico_movil.png',
      'ico_tv.png'
    ],
    titleBarHeight: 0,
    statusBarHeight: 0,
    showLoading: false
  },
  onLoad() {
    const {
      titleBarHeight,
      statusBarHeight,
    } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,  
    });
    this.getAsyncInformation();
  },
  getAsyncInformation(){
    this.showLoading();
    empresasVideoViewModel.requestGetEmpresasVideo()
      .then(info => {
        info.data.forEach(solution => {
          let reference = solution.icono;
          let indexTag = reference.lastIndexOf('/');
          let indeximg = this.data.images.indexOf(reference.substring(indexTag + 1));
          if(indeximg != -1){
            solution.icono = `${this.data.urlTag}${this.data.images[indeximg]}`;
          }
        });
        this.setData({
          solutions: info.data
        });
        this.hideLoading();
      })
      .catch(error => {
        my.alert({
          title: 'Error',
          content: error.errorMessage,
          buttonText: 'Aceptar'
        });
        this.hideLoading();
      });
  },
  onService(e){
    my.navigateTo({
      url: `/main/ui/pages/adquirir-producto/adquirir-producto`
    });
  },
  onSolution(e){
    my.navigateTo({
      url: ``
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
  }
});
