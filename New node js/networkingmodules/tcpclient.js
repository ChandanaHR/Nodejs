const net = require('net')
const client = net.createConnection({port:4000},()=>{
    console.log('Connected to server')
    client.write('Hello server , How are you')
})
client.on('data',(data)=>{
    console.log('Server says',data.toString())
    client.end()
})