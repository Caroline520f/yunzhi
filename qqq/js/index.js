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

    //background fade out
    var loading = document.querySelector('#loadingAnm')
    setTimeout(function () {
        loading.style.display = "none"
    }, 700)
    //icon

    //qrcode
    var qrcode = document.querySelector('#QRcode')
    qrcode.setAttribute("src", `${img.QRCode}`)

    var tip = document.querySelector('#tip')
    tip.setAttribute("src", `${img.tip}`)
    tip.style.width = "9rem"
    tip.style.height = "11rem"
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



}

function svgTool(data) {
    var svg = document.createElement("div")
    svg.innerHTML += `${data.svgs}`
    svg.style.display = "none"
    document.body.appendChild(svg)
``
    var icon = document.querySelector('#icon')
    icon.setAttribute("href", data.pageTitle)
    console.log(`icon`, icon)

}

function getDownload(data){
        //ios downlaod
        var ios = document.querySelector("#IOS")
        ios.setAttribute("href", data.ios)
}