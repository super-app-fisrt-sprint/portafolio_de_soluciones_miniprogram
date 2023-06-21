Page({
  data: {
    title: 'Adquirir Productos',
    number: '6017435558',
    webView: "https://www2.claro.com.co/negocios/app/solicitudes/solicitud-producto-generico-nv/?promo=nclaroapp"
  },
  onLoad() {
    my.setNavigationBar({
      "transparentTitle": "always",
      "responsive": true
    });
    const {
      titleBarHeight,
      statusBarHeight,
    } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
  },
  onUnload(){},
  onMakePhoneCall(e){
    my.makePhoneCall({ number: this.data.number });
  },
  onWebView(e){
    my.navigateTo({
      url: `/main/ui/pages/webView/webView?url=${this.data.webView}`
    });
  }
});
