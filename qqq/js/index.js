function imgaes(img) {
    //背景
    console.log(`背景图片的数据：`, img)
    var bg = document.querySelector('#mainIndex')
    bg.style.backgroundImage = `url(${img.scene})`;
    //logo
    var logoImg = document.querySelector('#logo')
    logoImg.setAttribute("src", `${img.title}`)
    //进度条
    var progress = document.querySelector('#progress')
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            progress.innerText = `${i * 25}%`
        }, 45 * i)
    }
    var headerLogo = document.querySelector('#headerLogo')
    headerLogo.setAttribute("src", `${img.title}`)
    headerLogo.style.width = "11.3rem"
    headerLogo.style.height = "7.5vh"
    headerLogo.style.marginTop = "3.5vw"
    headerLogo.style.objectFit = "cover"
    //background fade out
    var loading = document.querySelector('#loadingAnm')
    setTimeout(function () {
        loading.style.display = "none"
    }, 800)
    //icon
    var hidePage = document.querySelector('#mainPage')
    setTimeout(() => {
        
    }, 700);
    //qrcode
    var qrcode = document.querySelector('#QRcode')
    qrcode.setAttribute("src", `${img.QRCode}`)
    qrcode.style.width = "14rem"
    qrcode.style.height = "12.4rem"
    qrcode.style.objectFit = "cover"
    var tip = document.querySelector('#tip')
    tip.setAttribute("src", `${img.tip}`)
    tip.style.width = "10rem"
    tip.style.height = "12.8rem"
    tip.style.objectFit = "cover"
    //Amiya
    var amiya = document.querySelector("#Amiya")
    amiya.style.backgroundImage = `url(${img.Amiya})`


}


function indexVideoes(data) {
    //请求过来的视频信息数据data
    console.log(`视频信息的数据：`, data)
    //获取所有li
    var videoes = document.querySelector("#getNumber")
    var videoesLi = videoes.children //获取所有li
    var videoesA = document.querySelectorAll("#getNumber a")
    //让a标签无法跳转页面
    for (let i = 0; i < videoesA.length; i++) {
        videoesA[i].setAttribute("href", "javascript:;")
    }
    //获取滚动文字
    var scrollText = document.querySelector("#scrollText")
    //将前三个li的001,002,003渲染
    for (var i = 0; i < data.videos.length; i++) {
        videoesA[i].innerText = `00${data.videos[i].id}`
    }
    //one click chang the scroll text
    for (let i = 0; i < videoesLi.length; i++) {
        videoesA[i].onclick = function () {
            scrollText.innerHTML = data.videos[i].infoTitle + `<br>` + data.videos[i].infoBgm
            videoesA[i].style.color = "#fff"
        }
    }
    //let the a tag unselectable
    for (let i = 0; i < videoesLi.length; i++) {
        videoesLi[i].onmousedown = function () {
            return false
        }
    }
    //页面默认进入的时候显示的英文单词
    scrollText.innerHTML = data.videos[2].infoTitle + `<br>` + data.videos[2].infoBgm

    //video button
    var videoBtn = document.querySelector("#videoSvg")
    //data.videoBtn is the video svg
    videoBtn.innerHTML = data.playBtn
    // 遮罩层
    var player = document.querySelector("#maskVideo")
    // 视频
    var videoPlay = document.querySelectorAll("#videoControl")

    videoBtn.onclick = function () {
        player.style.display = "block"
    }
    player.onclick = function () {
        player.style.display = "none"
    }
    videoPlay.onclick = function () {

    }
}

function svgTool(data) {
    var svg = document.createElement("div")
    svg.innerHTML += `${data.svgs}`
    svg.style.display = "none"
    document.body.appendChild(svg)
    var icon = document.querySelector('#icon')
    icon.setAttribute("href", data.pageTitle)
    console.log(`icon`, icon)

    // 登录头部图片获取
    var loginLogo = document.querySelector("#loginLogo")
    loginLogo.setAttribute("src", `${data.pageTitle}`)
}

function getDownload(data) {

    console.log(`下载信息的数据：`, data)
    //get ul 
    var ulDownloadA = document.querySelector("#getDownload")
    var downLi = ulDownloadA.children
    console.log(downLi)
    for (let i = 0; i < downLi.length; i++) {
        let dwonSvg = downLi[i].children[0];
        dwonSvg.innerHTML += data.downloadBtn
        var svg = document.querySelectorAll("#downloadIcon")
        svg[i].setAttribute("xlink:href", data.herfs[i])
    }
    var svg = document.querySelectorAll("#downloadIcon")
    svg[2].style.transform = "scale(0.15,0.15)"
}

function getShare(data) {
    console.log(`分享信息的数据：`, data)
    var share = document.querySelector("#share")
    share.innerHTML = `${data.showBtnSvg}`

}

function getcCursor() {
    var circle = document.querySelector("#cursor")
    var bg = document.querySelector('#mainIndex')

    circle.style.display = "none"
    bg.onmousemove = function (e) {
        circle.style.display = "block"
        circle.style.left = (e.pageX - 20) + "px"
        circle.style.top = (e.pageY - 20) + "px"
    }
}
getcCursor()
function login() {
    //登录按钮
    var login = document.querySelector("#loginWindow")
    //遮罩层
    var loginDiv = document.querySelector("#loginWind")
    var mask = document.querySelector("#mask")
    //点击弹出登录框
    login.onclick = function () {
        //使用a标签实现跳出遮罩层
        login.setAttribute("href", "#mask")
        mask.style.display = "block"
    }
    loginDiv.onclick = function (e) {
        e.stopPropagation()   //!!!!!!!!!!!!!!!!!!!!!!   阻止冒泡
    }
    //点击遮罩层关闭
    mask.onclick = function () {
        mask.style.display = "none"
    }

    // 注册跳转页面
    var jumpRegister = document.querySelector("#register")
    jumpRegister.onclick = function () {
        //如何使用ppen方法打开新页面
        window.open("register.html")
    }

}
// 登录使用
login()

function clickTreg() {
    var clickTreg = document.querySelector("#clickTcancel")
    var mask = document.querySelector("#mask")
    // 点击取消遮罩层
    clickTreg.onclick = function () {
        mask.style.display = "none"
    }

}
// 点击取消遮罩层
clickTreg()

// jude the telphone number
function telReg() {
    var confrimBtn = document.querySelector("#clickTlogin");
    confrimBtn.onclick = function () {
        var telephone = document.querySelector("#telephone").value
        var password = document.querySelector("#password").value
        var telReg = /^1{1}[3-9]{1}\d{9}$/;
        var pwdCheck = /^\w{6,12}$/;
        if (telReg.test(telephone) && pwdCheck.test(password)) {
            console.log("输入正确")
        } else {
            console.log("账号或密码有误")
        }
    }
}
telReg()

function changeNavLi() {
    var leftNav = document.querySelector("#leftNav a")
    console.log(leftNav)
    for (let i = 0; i < leftNav.length; i++) {
        leftNav[i].onclick = function () {
            leftNav[i].setAttribute("href", "javascript:;")
        }
        console.log(leftNav[i])
    }
}
changeNavLi()