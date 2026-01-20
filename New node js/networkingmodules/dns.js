const dns = require('dns')
// dns.lookup('youtube.com',(err,address,family)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('IP Address',address)
//     console.log('IP Version',family)
// })

// async function getip() {
//     const result = await dns.lookup('google.com')
//     console.log(result)
// }
// getip()

dns.reverse('8.8.8.8',(err,hostname)=>{
    if(err) throw err;
    console.log(hostname)
})