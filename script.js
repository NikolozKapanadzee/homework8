

const http = require("http");
const url = require("url");
const queryString = require("querystring"); 
const fs = require("fs").promises




// 1) Create a server and handle this route /delete-file?filepath=test.txt,  and delete this file, if this file does not exists handle some error message.

// const server = http.createServer(async (req, res) => {
//     const parsedUrl = url.parse(req.url);
//     const query = queryString.parse(parsedUrl.query);
//     // console.log(query);
//     if (parsedUrl.pathname === "/" && req.method === "GET") {
//         res.writeHead(200, {
//             "Content-Type": "text/html",
//         })
//         res.end("hello guja")
//     }
//     if (parsedUrl.pathname === "/delete-file" && req.method === "GET") {
//     const filepath = query.filepath;
//     if (!filepath) return res.end("missing filepath query");
//     try{
//         await fs.unlink(filepath)
//         res.end(`File '${filepath}' deleted`)
//     }catch{
//         res.end(`File '${filepath}' not found`)
//     }
//   }
// })
// server.listen(4000, () => {
//     console.log(`server running on http://localhost:4000`);
// })
//ragacas aerorebs mainc mara mushaobs ver gavige ra unda






// 2) Create a server that handles products CRUD. create products.json and paste some products data. user should add/update/delete/get products. There should be pagination and also add filters like /posts?priceFrom=100&priceTo=300 should return all products within price range of 100-300.

// const server = http.createServer(async (req, res) => {
//     const parsedUrl = url.parse(req.url);
//     const query = queryString.parse(parsedUrl.query);
//     if (parsedUrl.pathname === "/" && req.method === "GET") {
//         res.writeHead(200, {
//             "Content-Type": "text/html",
//         })
//         res.end("hello guja")
//     }
//     if (parsedUrl.pathname === "/posts" && req.method === "GET") {
//         const rawProducts = await fs.readFile('products.json', 'utf8');
//         let data = JSON.parse(rawProducts);
//         let products = data.products;
//             if (query.priceFrom && query.priceTo) {
//                 products = products.filter(p =>
//                     p.price >= query.priceFrom && p.price <= query.priceTo
//                 );
//             }
//         res.writeHead(200, {
//             "Content-Type": "application/json",
//         })
//         res.end(JSON.stringify(products))
//     }
// })
// server.listen(4000, () => {
//     console.log(`server running on http://localhost:4000`);
// })




// 3) Create a server and handle this route /time?city=London, it should return what time is that city. Try to support few countries like NY, Berlin, Madrid, Pekin, Kiev and etc. 
//ver mivxvdi es rogor unda meqna


