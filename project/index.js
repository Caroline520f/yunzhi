function loading_silp() {
    let loading_left = document.querySelector("loading_left")
    let loading_right = document.querySelector("loading_right")
}

//background image
function index(imgData) {
    var indexDiv = document.querySelector("#background")
    indexDiv.style.backgroundImage = `url(${imgData.scene})`
}
//logo
function logo(logoData) {
    //get background
    var logoDiv = document.querySelector("#logo")
    logoDiv.style.backgroundImage = `url(${logoData.title})`
}

//
