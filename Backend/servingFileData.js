import fs from 'fs';
import http from 'http';
http.createServer(function (req, res) {
  console.log(__dirname);
  fs.readFile(__dirname + req.url + 'forms/register.html', function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);
