const http = require('http');
const fs = require('fs');
// const path = require('path');

const server = http.createServer((req, res) => {
  const test = fs.readFileSync('./index.html', (err) => {
    if (err) throw err;
  });

  const css = fs.readFileSync('./style.css', (err) => {
    if (err) throw err;
  });

  const click = fs.readFileSync('./click.js', (err) => {
    if (err) throw err;
  });


  // 브라우저는 특별한 사항이 없으면 기본으로 GET 요청을 한다.
  // 그렇기 때문에 if 조건문에 요청 메서드가 GET 이라는 조건을 전제할 수 있다.
  if(req.method === 'GET') {
    if(req.url === '/'){
      console.log('여기는 루트입니다.');
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(test)
      res.end();
    } else if(req.url === '/style.css') {
      console.log('여기는 스타일 css');
      res.writeHead(200, {"Content-Type": "text/css"});
      res.write(css);
      res.end();
    } else if(req.url === '/click.js') {
      console.log('여기는 click.js');
      res.writeHead(200, {"Content-Type": "text/javascript"});
      res.write(click);
      res.end();
    }
  }
});

server.listen(5678, (err) => {
  console.log('5678 포트로 서버 가동');
  if (err) throw err;
});