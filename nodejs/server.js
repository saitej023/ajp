const http = require("http");

const server = http.createServer((req,res) => {
    res.write("Heloo from nodde server");
    res.end();
});

server.listen(5000,()=>{
    console.log("server running on http://localhost:5000");
});
