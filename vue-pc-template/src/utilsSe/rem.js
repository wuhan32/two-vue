const resize = 'orientationchange' in window ? 'orientationchange' : 'resize'

const initView = () => {
  const width = document.body.clientWidth / 19.2
  document.querySelector('html').style.fontSize = `${width}px`
}

window.addEventListener(resize, initView)
document.addEventListener('DOMContentLoaded', initView)
