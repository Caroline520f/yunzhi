

//background image
function index(imgData) {
    var indexDiv = document.querySelector("body")
    indexDiv.style.backgroundImage = `url(${imgData.scene})`
}
//logo
function logo(logoData) {
    //get background
    var logoDiv = document.querySelector("#logo")
    logoDiv.setAttribute("src", `${logoData.title}`)
}
function svg(svgData) {
    console.log(svgData)
    var svgDiv = document.querySelector("#svg")
    svgDiv.innerHTML = `${svgData.showBtnSvg}`
    svgDiv.style.width = "2rem"
    svgDiv.style.height = "2rem"
}
//
loading_silp()