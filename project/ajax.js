//This file contains the functions that are used to make AJAX calls to the server.
//主页的ajax请求
window.onload = function () {
   
   
    //background
    function getServer(method, url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var Data = JSON.parse(xhr.responseText);
                console.log(Data)
                fn(Data)
            }
        }
    }
    //背景图片
    getServer("get", "http://192.168.2.105:8080/api/index/imgs", null, index)
    //明日方舟logo
    getServer("get", "http://192.168.2.105:8080/api/index/imgs", null, logo)
}
