const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = tls.createServer(options, (socket) => {
  console.log('Client connected securely');

  socket.write('Hello Secure Client 🔐');

  socket.on('data', (data) => {
    console.log('Client says:', data.toString());
  });
});

server.listen(8000, () => {
  console.log('TLS server running on port 8000');
});
