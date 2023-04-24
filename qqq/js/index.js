var telephon1e = document.querySelector("#telephone")
var password = document.querySelector("#password")
var loginWind = document.querySelector("#mask")
var listRo = document.querySelector('#listRo')
var token = localStorage.getItem('token')
var pageNum = '003'
var roleImgShow = document.querySelector('#roleImgShow')
function imgaes(img) {
    //背景
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

    // 登录头部图片获取
    var loginLogo = document.querySelector("#loginLogo")
    loginLogo.setAttribute("src", `${data.pageTitle}`)
}

function getDownload(data) {

    //get ul 
    var ulDownloadA = document.querySelector("#getDownload")
    var downLi = ulDownloadA.children
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
    var share = document.querySelector("#share")
    share.innerHTML = `${data.showBtnSvg}`

}

function getcCursor() {
    var circle = document.querySelector("#cursor")
    var Fbody = document.querySelector('body')

    circle.style.display = "none"
    Fbody.onmousemove = function (e) {
        circle.style.display = "block"
        circle.style.left = (e.pageX - 18) + "px"
        circle.style.top = (e.pageY - 13) + "px"
    };




    let leftNav = document.querySelector("#leftNav")
    let navMenus = [...leftNav.children]
    console.log(navMenus)

    navMenus.forEach((now, index) => {
        // 将每一个li的文字变蓝，同时向左移
        now.children[0].addEventListener("mouseenter", function () {
            now.children[0].style = "color:#22BBFF;transform:translateX(-1vw);";
            // 小球变大
            circle.style =
                "background-color:rgba(255,255,255,0.5);transform:scale(0.75);";
        });

        // 移出：将每一个li复原
        now.children[0].addEventListener("mouseleave", function () {
            now.children[0].style = "";
            // 小球复原
            circle.style = "";
        });

        // 每一个li施加点击事件
        now.children[0].onclick = function () {

            // 将所有Li中span的style消除
            navMenus.forEach((elses) => {
                elses.children[0].style = "";

                // 给所有li加上移入移出效果
                elses.children[0].onmouseenter = function () {
                    elses.children[0].style = "color:#22BBFF;transform:translateX(-1vw);";
                    // 将小球复原
                    circle.style =
                        "background-color:rgba(255,255,255,0.5);transform:scale(0.75);";
                };
                elses.children[0].onmouseleave = function () {
                    elses.children[0].style = "";
                    // 将小球复原
                    circle.style = "";
                };
            });

            // 给点击的li施加对应样式
            now.children[0].style = `
            color:#06A3DA;
            border-right:5px solid #06A3DA;
            padding-right: 1vw;
            `;

            // 赋予移入移出的事件
            now.children[0].onmouseenter = indexEnter;
            now.children[0].onmouseleave = indexLeave;

            // 跳转到相应的页面
            // 获取首页、新闻、干员、设定、档案页面
            let pages = document.querySelectorAll(".pages");
            // 首页、新闻、干员、设定、档案页面都回归到原点
            pages.forEach((item) => {
                item.style.top = `${(-100) * index}vh`;
            });

            //

            if (index != 0) {
                let amiya = document.querySelector("#Amiya")
                amiya.style.display = "none"
            } else {
                let amiya = document.querySelector("#Amiya")
                amiya.style.display = "block"
            }
            let pageNum = document.querySelector("#numpage")
            pageNum.innerText = `/0${index + 1}/05`
        };

    });

    // 移入事件函数
    let indexEnter = (event) => {
        event.target.style = `color:#06A3DA;
      border-right:5px solid #06A3DA;
      padding-right: 1vw;
      transform:translateX(-1vw);
      `;
    };

    // 移出事件函数
    let indexLeave = (event) => {
        event.target.style = `transform:translateX(0vw);
        color:#06A3DA;
        border-right:5px solid #06A3DA;
        padding-right: 1vw;`;
    };

    // 页面初始化时，首页的移入移出事件的函数
    navMenus[0].children[0].onmouseenter = indexEnter;
    navMenus[0].children[0].onmouseleave = indexLeave;
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
    console.log('进入了telReg')
    var confrimBtn = document.querySelector("#logia");
    if (localStorage.getItem('token') != null) {
        telephone.value = localStorage.getItem('telephone')
        password.value = localStorage.getItem('password')
    }
    confrimBtn.onclick = function () {
        console.log("点击了登录按钮")
        var telReg = /^1{1}[3-9]{1}\d{9}$/;
        var pwdCheck = /^\w{8,12}$/;
        if (telReg.test(telephone.value) && pwdCheck.test(password.value)) {
            isLogin()
        } else {
            window.alert("手机号或密码错误")
        }
    }

}
telReg()

function isLogin() {
    var xhr = new XMLHttpRequest()
    xhr.open("post", "http://8.134.165.47:8080/api/user/login")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`telephone=${telephon1e.value}&password=${password.value}&token=${token}`);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var Data = JSON.parse(xhr.responseText);
            if (Data.status == 0) {
                window.alert("登录成功")
                loginWind.style.display = "none"

            } else {
                console.log("登录失败")
            }
        }
    }
}

function changMouseIcon(data) {
    var curs = document.querySelector("body")
    var getIcon = data.points
    curs.style.cursor = `url(${getIcon.image1}),auto`
}

let tele = localStorage.getItem('telephone')
let pwd = localStorage.getItem('password')


// get curosr
// var cursor = document.querySelector('#cursor')
// // curosr move aniam
// function opac() {
//     let xhr = new XMLHttpRequest()
//     xhr.open('get', "http://8.134.165.47:8080/api/index/opacity")
//     xhr.send()
//     xhr.onload = () => {
//         if (xhr.status == 200 && xhr.readyState == 4) {
//             console.log(xhr.responseText)
//         }
//     }
// }
// opac()