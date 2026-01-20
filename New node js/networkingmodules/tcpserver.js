const net = require('net')
const server = net.createServer((socket)=>{
    console.log('Client connected')
    socket.write('Hello client')
    socket.on('data',(data)=>{
        console.log('Client says',data.toString())
    })
    socket.on('end',()=>{
        console.log('Client disconnected')
    })
})
 server.listen(4000,()=>{
        console.log('TCP port running on 4000')
})