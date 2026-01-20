const tls = require('tls')
const fs = require('fs')

// const options = {
// //   key: fs.readFileSync('key.pem'),
//   cer: fs.readFileSync('cert.pem')
// };

const options = {
  host: 'localhost',
  port: 8000,
  rejectUnauthorized: false
};

const client = tls.connect(8000, options,()=>{
    console.log('Connected to secure server')
    client.write('Hello secure server')
})

client.on('data',(data)=>{
    console.log('Server says',data.toString())
})