import './assets/common.sass'

function changeTitle () {
  window.$('#app').html('Pracel 包包')
}

setTimeout(function () {
  changeTitle()
}, 2000)