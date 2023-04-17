window.onload = function () {
function getRegPage(method, url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var Data = JSON.parse(xhr.responseText);
            fn(Data)
        }
    }
}
getRegPage("get", "http://8.134.165.47:8080/api/personalCenter", null, personalCenter)
}