import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

const PORT = process.env.PORT;
const server = http.createServer(async (req, res) => {

  try {
    if (req.method === 'GET') {
      let filePath;
      switch (req.url) {
        case '/':
          filePath = path.join(__direname, 'public', 'home.html');
          break;
        case '/about':
          filePath = path.join(__direname, 'public', 'about.html');
          break;
        default:
          throw new Error("Page not found bro.");
          break;
      }
      const data = await fs.readFile(filePath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    }
    else {
      throw new Error("Method not allowed !");
    }
  }
  catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('<h1>Internal server Error !<h1/>');
  }

})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log("follow the link " + "http://localhost:8000")
});