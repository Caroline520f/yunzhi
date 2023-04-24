// for local node server
const http = require('http');
// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
    // req 是一个 http.IncomingMessage 实例，它是可读流。
    // 解析请求的 URL 和请求方法
    const { url, method } = req;

    // 根据url和请求方法进行相应处理
    if (url === '/api/data' && method === 'GET') {
        // 处理GET请求 /api/data
        //返回数据
        const data = { message: 'it works!' };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } else {
        // 处理其他请求
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('scrver running at http://localhost:3000');
});

