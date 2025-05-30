//server.js
console.log("hello")
console.log(global);


const os = require('os');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(__dirname)
console.log(__filename)

const path = require('path')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

const math = require("./math")
console.log(math.add(2,3))
console.log(math.subtract(2,3))
console.log(math.multiply(2,3))
console.log(math.divide(2,3))

//math.js
const add = (a,b)=>a+b;
const subtract = (a,b)=>a-b;
const multiply = (a,b)=>a*b;
const divide = (a,b)=>a/b;
module.exports = {add,subtract,multiply,divide}
