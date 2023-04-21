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
    getServer("get", "http://8.134.165.47:8080/api/index/imgs", null, imgaes)
    //视频信息
    getServer("get", "http://8.134.165.47:8080/api/index/videoes", null, indexVideoes)
    //svgTool
    getServer("get", "http://8.134.165.47:8080/api/svgTool", null, svgTool)
    //downloadinfo
    getServer("get", "http://8.134.165.47:8080/api/index/downloads", null, getDownload)
    getServer("get", "http://8.134.165.47:8080/api/index/shows", null, getShare)
    getServer("get", "http://8.134.165.47:8080/api/index/imgs", null, changMouseIcon)


}