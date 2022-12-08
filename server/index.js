    const express = require('express');
    const app = express();
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    const path = require('path');

io.on('connection', (client)=>{
    console.log('client connected');
    client.on('join', (message)=>{
        console.log(message);
        io.emit('greetings', 'Hello User')
    })
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(3000, ()=>{
    console.log("Server Listening on port 3000");
})
