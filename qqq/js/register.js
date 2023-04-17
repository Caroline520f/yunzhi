function personalCenter(data) {
    // logo
    var topLogo = document.querySelector('#topLogo')
    topLogo.setAttribute('src', data.titleImg)

    // custom
    var customImg = document.querySelector('#customLine')
    customImg.setAttribute('src', data.toCustomImg)

    // 背景图片
    var bg = document.querySelector('#bgImg')
    bg.style.backgroundImage = `url(${data.bgImg})`

    // 个人中心
    var loginBtn = document.querySelector('#loginBtn')
    var registerBtn = document.querySelector('#registerBtn')
}
