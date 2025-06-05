//To create a new directory
const fs = require('fs')
if(!fs.existsSync("./new")){
    fs.mkdir("./new",(err)=>{
    if(err) throw err;
    console.log("Directory created")
})
}
//remove directory
if(fs.existsSync("./new")){
    fs.rmdir("./new",(err)=>{
    if(err) throw err;
    console.log("Directory removed")
})
}

//npm - node package manager : npmjs.com
//npm provides thousands of packages which is required to build your applications
//npm documentation - CLI(Command line interface)

//index.js
console.log("testing")
//in cmd type npm install nodemon -g use of nodemon is that wheneever u do modifications to the files it automatically restarts the server
//in cmd type nodemon and make some changes to file it automatically restarts
console.log("testing...........")
//in cmd type npm init
//now we can see package.json
//in cmd type npm i datefns
//in node_modules we find a lot files and folders hence under nodemodules add .gitignore files and in .gitignore file type node_modules

//index.js
const {format} = require('date-fns');
console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

//in cmd type npm i nodemon -D //to install dev dependency we can see in package.json dev dependency will be installed
//in package.json change scripts : {"start" : "node index", "dev":"nodemon index"}
//in cmd type npm run dev //nodemon will start 
//in cmd type npm i uuid //which allows us to generate id's uuid will be installed
//index.js
const {v4 : uuidv4} = require('uuid');
console.log(uuidv4())
//if we want to install specific version npm i uuid@version no

//Event emitter: It is a core module that provides a way to handle asynchronous events
//logevents.js
const {format} = require('date-fns');
const {v4 : uuidv4} = require('uuid');
//console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const logEvents = async(message)=>{
    const dateTime = `${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}`;
    console.log(logItem);
    try {
        await fsPromises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logItem);
    } catch(err) {
        console.error(err);
    }
}
module.exports = logEvents;


//eventsexample.js
const {format} = require('date-fns');
const {v4 : uuidv4} = require('uuid');
//console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const logEvents = async(message)=>{
    const dateTime = `${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}`;
    console.log(logItem);
    try {
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logItem);
    } catch(err) {
        console.log(err);
    }
}
module.exports = logEvents;

//index.js
//const { setTimeout } = require('timers/promises');
const logEvents = require('./eventsexample');
const eventemitter = require('events');
class Myemitter extends eventemitter{};
//initialize object
const myemitter = new Myemitter();
//add listener for log event
myemitter.on('log',(msg)=>logEvents(msg)) //listening to the function logEvents in eventsexample file
setTimeout(() => {
  myemitter.emit('log', 'Log event emitted');
}, 4000);

//example.js
const eventemitter = require('events')
class example extends eventemitter{}
const object = new example();
object.on('login',(username)=>{
    console.log(`${username} has logged in`);
})
object.on('logout',(username)=>{
    console.log(`${username} has logged out`)
})
object.emit('login','Chandana')
object.emit('logout','Chandana')  //To run file using nodemon type: nodemon filename.js

//To install nodemon as local dependency type npm install --save-dev nodemon
