const dgram = require('dgram')
const client = dgram.createSocket('udp4')
const message = Buffer.from('Hello UDP server')
client.send(message, 41234, 'localhost',(err)=>{
    if(err) throw err
    console.log('Message sent')
    client.close();
})