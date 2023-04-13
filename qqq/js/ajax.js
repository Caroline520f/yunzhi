window.onload = function () {
    function getServer(method, url, data, fn) {
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
    //背景图片
    getServer("get", "http://192.168.2.105:8080/api/index/imgs", null, imgaes)
    //视频信息
    getServer("get", "http://192.168.2.105:8080/api/index/videoes", null, indexVideoes)
    //svgTool
    getServer("get", "http://192.168.2.105:8080/api/svgTool", null, svgTool)
    //downloadinfo
    getServer("get", "http://192.168.2.105:8080/api/index/downloads", null, getDownload)
}