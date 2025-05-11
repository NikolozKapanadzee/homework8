

const http = require("http");
const url = require("url");
const queryString = require("querystring"); 
const fs = require("fs").promises




// 1) Create a server and handle this route /delete-file?filepath=test.txt,  and delete this file, if this file does not exists handle some error message.

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = queryString.parse(parsedUrl.query);
    if (parsedUrl.pathname === "/" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html",
        })
        res.end("hello guja")
    }
    if (parsedUrl.pathname === "/delete-file" && req.method === "GET") {
        const filepath = query.filepath;
        if (!filepath) {
            res.writeHead(200, { 
                "Content-Type": "text/plain"
            });
        res.end("unfourtinately rout does not exit")
        }else{
            await fs.unlink(filepath);
            res.writeHead(200, { 
                    "Content-Type": "text/plain"
                });
            res.end(`file ${filepath} deleted successfully`);
        }
    }
})
server.listen(4000, () => {
    console.log(`server running on http://localhost:4000`);
})






// 2) Create a server that handles products CRUD. create products.json and paste some products data. user should add/update/delete/get products. There should be pagination and also add filters like /posts?priceFrom=100&priceTo=300 should return all products within price range of 100-300.

// 3) Create a server and handle this route /time?city=London, it should return what time is that city. Try to support few countries like NY, Berlin, Madrid, Pekin, Kiev and etc. 



// const server = http.createServer(async (req, res) => {
//     const parsedUrl = url.parse(req.url);
//     if (parsedUrl.pathname === "/" && req.method === "GET") {
//         res.writeHead(200, {
//             'content-type': 'text/html'
//         })
//         res.end("hello world");
//     }
//     if (parsedUrl.pathname === "/users" && req.method === "GET") {
//         const users = await readFileAndParse('users.json', true)
//         res.writeHead(200, {
//             'content-type': 'application/json'
//         })
//         res.end(JSON.stringify(users));
//     }
//     if (parsedUrl.pathname === "/posts" && req.method === "GET") {
//         const query = queryString.parse(parsedUrl.query);
//         let page = Number(query.page) || 1;
//         let take = Number(query.take) || 30;
//         take = Math.min(30, take);
//         const start = (page - 1) * take;
//         const end = start + take;
//         const posts = await readFileAndParse('posts.json', true)
//         res.writeHead(200, {
//             'content-type': 'application/json'
//         })
//         res.end(JSON.stringify(posts.slice(start,end)));
//     }
// })
// server.listen(4000, () => {
//     console.log(`server running on http://localhost:4000`);
// })