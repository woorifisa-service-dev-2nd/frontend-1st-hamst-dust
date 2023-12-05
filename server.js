var express = require('express');
var app = express();

app.use(express.static('public'));
// 역직렬화용 미들웨어 추가
//app.use(express.json());
app.get('/', (req, res) => res.sendFile(__dirname+'index.html'));

const port = 3000;
app.listen(port, () => console.log(`http://127.0.0.1:${port}/ app listening on port ${3000}`));