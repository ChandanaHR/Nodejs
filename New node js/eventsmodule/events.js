const EventEmitter = require('events')
const emitter = new EventEmitter()
// emitter.on('bellrang',()=>{
//     console.log("Someone pressed the bell")
// })
// emitter.emit('bellrang')

// //Pass data with events
// emitter.on('sum',(a,b)=>{
//     console.log(a+b)
// })
// emitter.emit('sum',10,20)

// //Multiple listeners for the same event
// emitter.once('login',()=>{
//     console.log('Admin login')
// })
// emitter.on('login',()=>{
//     console.log('Asha login')
// })
// emitter.emit('login')
// // emitter.emit('login')
// //Run listener only once

// //Removing listeners
// function handler() {
//     console.log("Function 1")
// }
// // emitter.on('task',handler)
// // emitter.emit('task')
// emitter.off('task',handler)
// emitter.emit('task')
// //Error handling in events
// emitter.on('error',(err)=>{
//     console.error(err.message)
// })
// emitter.emit('error')
//Async events
// emitter.on('data',async()=>{
//     await new Promise(res=>setTimeout(res,4000))
//     console.log('Async event done')
// })
// emitter.emit('data')
class Userservice extends EventEmitter {
    register(user) {
        console.log("User registered")
        this.emit('userregistered',user)
    }
}
const service = new Userservice();
service.on('userregistered',(user)=>{
    console.log('Send email to',user)
})
service.register('Chandana')
service.register('Asha')