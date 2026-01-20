const dgram = require('dgram')
const server = dgram.createSocket('udp4')
server.on('message',(msg,rinfo)=>{
    console.log(`Message from client, ${msg}` )
    console.log(`Client info : ${rinfo.address}, Port: ${rinfo.port}`)
})
server.on('listening',()=>{
    const address = server.address();
    console.log(`Server info ${address.address}, ${address.port}`)
})
server.bind(41234)