let config = {
  token: null,
  server: 'https://www.zhreleven.com:9001/',
  debug: !location.host.includes('wefamily.gitee.io') && !location.host.includes('brucekong.com')
}

let server = config.server
let localServer = localStorage.getItem('local-server')
if (localServer) server = localServer

// 判断 iframe 的父级的 body 是不是 dark 类，有的话给当前的 body 加 dark
let htmlHasDark = parent.document.querySelector('html.dark')
let bodyHasDark = parent.document.body.classList.toString().includes('dark')
if (htmlHasDark || bodyHasDark) {
  document.body && document.body.classList.add('dark')
  // localStorage.setItem('sandbox-theme', 'dark')
}

function dispatchEventStorage() {
  const signSetItem = parent.parent.localStorage.setItem
  parent.parent.localStorage.setItem = function (key, val){
    let setEvent = new Event('setItemEvent')
    setEvent.key = key
    setEvent.newValue = val
    parent && parent.parent && parent.parent.window && parent.parent.window.dispatchEvent && parent.parent.window.dispatchEvent(setEvent)
    signSetItem.apply(this, arguments)
  }
}

dispatchEventStorage()

//根据自己需要来监听对应的key
parent.parent.window.addEventListener("setItemEvent",(e) => {
  //e.key : 是值发生变化的key
  //e.newValue : 是可以对应的新值
  if(e.key === "vitepress-theme-appearance"){
    if (e.newValue === 'dark') {
      // 修改页面布局的风格
      document.body.classList.add('dark')
    }else if (e.newValue === 'auto') {
      document.body.classList.remove('dark')
    }
  }
})

// 判断是不是在kapi-docs中
if (window.parent.parent.document.querySelector('.VPApp')) {
  document.onkeydown = (e) => {
    let keyCode = e.key;
    let ctrlKey = e.ctrlKey;
    let shiftKey = e.shiftKey;
    if (ctrlKey) {
      //这里可以处理同时按下ctrl的逻辑，加上其他按键可以实现快捷键功能
      switch (keyCode) {
        case 'k':
          // 要去执行
          // console.log("Ctrl + k")
          e.preventDefault()
          return false
          break;
        default:
          break;
      }
    }
  }
}

if (config.debug) console = parent.console
let oldConsoleLog = console.log
printLog = function () {
  if (config.debug) oldConsoleLog.apply(this, arguments)
  output(arguments[0])
}

function output(info) {
  if (window.hljs && document.querySelector('#console-log code')) {
    let success = true
    if (!info) {
      return
    }
    if (info.hasOwnProperty('success')) {
      success = info.success
    }
    if (info.hasOwnProperty('code')) {
      success = info.code === 200
    }
    // 判断info是不是对象，是的话就执行JSON.stringify；否则执行打印
    let renderHtml = `<p style='margin: 0; padding-top: 8px;'>${info}</p>`
    if (typeof info === 'object') {
      let highlightValue = hljs.highlight('json', JSON.stringify(info, null, 2))
      renderHtml = highlightValue.value
    }
    document.querySelector('#console-log code').innerHTML =
      '\n<span style="color: #8f8f8f;user-select: none;">[RECEIVED TIME]: ' + standardizedTime(new Date()) + '</span>\n'
      + '<div style="background-color: ' + (success ? 'white' : '#FFF0F0') + '">' + renderHtml + '</div>'
      + '<span style="color: #ededed;user-select: none;">----------------------------------------------------------------------------------------------------</span>'
    + document.querySelector('#console-log code').innerHTML
  }
}

function standardizedTime(date) {
  if (date === "" || !date) {
    return "";
  }
  date = new Date(date);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  let second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
