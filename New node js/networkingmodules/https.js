const https = require('https')
https.get('https://jsonplaceholder.typicode.com/posts/1',(res)=>{
    res.on('data',(data)=>{
        console.log(data.toString());
    })
})