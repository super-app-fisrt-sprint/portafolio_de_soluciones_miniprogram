Page({
  data: {
    linkSolutions: [],
    dataSolutions: [],
    currentData: 0,
    video: {
      src: 'https://files.catbox.moe/odue40.mp4',
      showAllControls: true,
      showPlayButton: true,
      showCenterButton: true,
      showFullScreenButton: true,
      isLooping: false,
      muteWhenPlaying: false,
      initTime: 0,
      objectFit: 'contains',
      autoPlay: false,
      directionWhenFullScreen: 90,
      mobilenetHintType: 2
    },
    titleBarHeight: 0,
    statusBarHeight: 0,
    scrollVisible: false
  },
  onLoad(query) {
    const {
      titleBarHeight,
      statusBarHeight,
    } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
    this.setInformation(query.solutions, query.idSolution);
  },
  setInformation(solutions, idSolution) {
    let solutionsMap = JSON.parse(solutions);
    solutionsMap.forEach(solution => {
      solution['title'] = solution.nombre;
      delete solution.nombre;
    });
    this.setData({
      dataSolutions: solutionsMap,
      currentData: Number(idSolution)
    });
  },
  onPlay(e) {
    this.setData({
      backgroundColor: true
    });
  },
  onPause(e) {
    this.setData({
      backgroundColor: false
    });
  },
  onEnded(e) {
    this.setData({
      backgroundColor: false
    });
  },
  onError(e) {
    console.log(e);
  },
  onSwipeChange(e) {
    this.setData({
      currentData: e.detail.current
    });
  },
  onChangeTab(current) {
    this.setData({
      currentData: current
    });
  },
  handleShowPopup() {
    let data = this.data.dataSolutions;
    let index = this.data.currentData;
    let solution = data[index].link;
    this.setData({
      scrollVisible: true,
      linkSolutions: solution
    });
  },
  handlePopupClose() {
    this.setData({
      scrollVisible: false
    });
  },
  onHyperLink(e){
    let link = e.currentTarget.dataset.set.valor
    my.navigateTo({
      url: `/main/ui/pages/webView/webView?url=${link}`
    });
  }
});