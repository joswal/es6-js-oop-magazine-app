const os = require("os");
const http = require("http");
const url = require("url");

// const myurl = new URL("https://nodejs.org/dist/latest-v10.x/docs/api/url.html");

// console.log(os.platform(), " and ", os.arch());

// console.log(os.cpus());

// console.log(os.totalmem(), "and ", os.freemem());

// console.log(myurl.toString());

// console.log(
//   "protocol is:",
//   myurl.protocol,
//   " port is:",
//   myurl.port,
//   " host is:",
//   myurl.host,
//   " pathname is:",
//   myurl.pathname
// );

// console.log(myurl.searchParams.append("user", "joswal"));
// myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/")
    () => {
      res.writeHead(200, { "content-Type": "text/html" });
      res.end("<h1>my first page</h1>");
    };
});
const port = process.env.port || 3000;
server.listen(port, () => {
  console.log(`server running on ${port}`);
});
