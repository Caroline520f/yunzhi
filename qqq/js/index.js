var telephon1e = document.querySelector("#telephone")
var password = document.querySelector("#password")
var loginWind = document.querySelector("#mask")
var listRo = document.querySelector('#listRo')
var listRoLi = [...listRo.children];
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

function jumpTrole() {
    var roles = document.querySelector('#roles')
    var mainInfo = document.querySelector('#mainInfo')
    roles.onclick = () => mainInfo.style.display = 'none'
}
jumpTrole()
let tele = localStorage.getItem('telephone')
let pwd = localStorage.getItem('password')
function getRolesInfo(method, url, tele, pwd, token) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(`telephone=${tele}&password=${pwd}&pageNum=003&token=${token}`);
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                // console.log(`getData CV`, Data.roleinfo[0].CV)
                // console.log(`getData audio`, Data.roleinfo[0].audio)
                // console.log(`getData englishName`, Data.roleinfo[0].englishName)
                // console.log(`getData id`, Data.roleinfo[0].id)
                // console.log(`getData info`, Data.roleinfo[0].info)
                // console.log(`getData name`, Data.roleinfo[0].name)
                // console.log(`getData roleImage`, Data.roleinfo[0].roleImage)
                // console.log(`getData staff`, Data.roleinfo[0].staff)
                // console.log(`getData staffHerf`, Data.roleinfo[0].staffHerf)
                // for (let i = 0; i < listRoLi.length; i++) {
                //     listRoLi[i].setAttribute('id', `id${Data.roleinfo[i].id}`)
                // }
                //map遍历listRoLi

                const res = xhr.responseText
                const Data = JSON.parse(res)
                resolve(Data)
            } else {
                reject('请求失败', xhr.responseText)
            }
            // Data.roleinfo[0].CV
            // Data.roleinfo[0].audio
            // Data.roleinfo[0].englishName
            // Data.roleinfo[0].id
            // Data.roleinfo[0].info
            // Data.roleinfo[0].name
            // Data.roleinfo[0].roleImage
            // Data.roleinfo[0].staff
            // Data.roleinfo[0].staffHerf


        }
    })
}


// listRoLiArr.map((item, index) => { //item是listRoLi[index] index是索引
//     item.setAttribute('id', `roleId${Data.roleinfo[index].id}`)
// })
// 链式请求
async function staff() {
    const data = await getRolesInfo('post', "http://8.134.165.47:8080/api/roles", tele, pwd, token)
    console.log(data)

    listRoLi.map((item, index) => { //item是listRoLi[index] index是索引
        item.setAttribute('id', `roleId${data.roleinfo[index].id}`)
    })
    roleImgShow.setAttribute('src', data.roleinfo[0].roleImage)
    console.log(listRoLi)
}
staff()
// 角色图片

// add animation to NAV
// get ul
var nav = document.querySelector('#leftNav')
// get leftNav li a
// var leftLi = nav.querySelectorAll('li a')
// console.log(leftLi)
let navLi = [...nav.children]
console.log(navLi)
// move
navLi.forEach(item => {
    // li  item.children[0]
    item.children[0].onmouseenter = moveIn;
    function moveIn() {
        item.style = 'transform:translateX(-1vw)'
        item.children[0].style = 'color:#22bbff'
        cursor.style = 'background-color:rgba(255,255,255,0.5);transform:scale(0.75)'
    }
    item.children[0].onmouseleave = moveOut;
    function moveOut() {
        item.style = ''
        item.children[0].style = 'color:#fff;'
        cursor.style = ''
    }

    item.onclick = function (e) {
        // a wait.children[0]
        navLi.forEach((wait) => {
            wait.onmouseenter = function () {
                wait.children[0].style = 'transform:translateX(-1vw)'
                wait.children[0].style = 'color:#22bbff'
                cursor.style = 'background-color:rgba(255,255,255,0.5);transform:scale(0.75)'
                 };
            wait.onmouseleave = function () {
                // wait.children[0].style = "";
                // cursor.style = "";
                // wait.style = ''
            };;
            item.children[0].style = `
            color:#06A3DA;
            border-right:5px solid #06A3DA;
            padding-right:1vw;
            `;
        });
       
        console.log(item.children[0])
        item.children[0].onmouseenter = null;
        item.children[0].onmouseleave = null;
    };

})


// get curosr
var cursor = document.querySelector('#cursor')
// curosr move aniam
