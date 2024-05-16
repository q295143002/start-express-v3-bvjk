const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// 使用 compression 中间件启用 gzip 压缩
app.use(compression());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, './')));

// 定义一个基本路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

// 启动服务器
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
