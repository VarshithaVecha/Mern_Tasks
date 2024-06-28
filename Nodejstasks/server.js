const http = require("node:http");
// console.log(http);

let server = http.createServer(function(req,res){ //request,response
    res.write("hello from server");
    res.end();
});

server.listen(4000, ()=>{
    console.log("server is running on port 4000");
});

//to run node {filename}