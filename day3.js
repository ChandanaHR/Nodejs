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
