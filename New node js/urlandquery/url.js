// https://www.amazon.com:443/mobile?brand=samsung&color=black
// const myurl = new URL('https://www.amazon.com:4433/mobile?brand=samsung&color=black')
// console.log(myurl.protocol)
// console.log(myurl.hostname)
// console.log(myurl.port)
// console.log(myurl.pathname)
// console.log(myurl.search)
// //Reading query parameters
// console.log(myurl.searchParams.get('brand'))
// console.log(myurl.searchParams.get('color'))
// //Loop query params
// for(const [key,value] of myurl.searchParams) {
//     console.log(key,value)
// }
// //Modify URL Values
// myurl.searchParams.set('color','blue')
// console.log(myurl)
// console.log(myurl.toString())
// //Create a URL dynamically
// const myurl2 = new URL('https://api.example.com')
// myurl2.pathname = '/users'
// myurl2.searchParams.set('id',101)
// myurl2.searchParams.set('qual','cse')
// console.log(myurl2)
// console.log(myurl2.toString())
// console.log(myurl2.href)
// const http = require('http')
// http.createServer((req,res)=>{
//     const requrl = new URL(req.url,`http://${req.headers.host}`)
//     if(requrl.pathname==='/login') {
//         const user = requrl.searchParams.get('user')
//         res.end(`Hello ${user}`)
//     }
// }).listen(3000)

const querystring = require('querystring')
const qs = "name=Chandana&role=sde&exp=2"
const result = querystring.parse(qs)
console.log(result)
const obj = {
    "name":"asha",
    "age":23
}
const qs1 = querystring.stringify(obj)
console.log(qs1)