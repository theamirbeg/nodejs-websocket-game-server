const ws = require('nodejs-websocket');
const port = process.env.PORT || 8000

const server = ws.createServer((connection)=>{
    console.log("New connection");

    connection.on("text", (str)=>{
        console.log("Recieved: " + str); 
        connection.send(str.toUpperCase());
    });

    connection.on("close", (code, reason)=>{
        console.log("Connection closed");
    });

}).listen(port);



server.on("connection", (client)=>{
    client.send("Hello client");
});

server.on("listening", ()=>{
    console.log("Listening on port " + port);
});
