//create a files folder and inside that create one.txt and two.txt
//Read is used to read contents from file in one.txt : Hello i am chandana HR
const fs = require('fs');
const path = require('path');

fs.readFile("./files/one.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
})
//Instead of data.toString() we can give 'utf-8'
fs.readFile("./files/one.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
console.log("Hello...") //to show the execution of aysnc
//exit on uncaught exception
process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

fs.readFile(path.join(__dirname,'files','one.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})

//write operation is used to write some content inside a file by creating a file dynamically. initially only file wont be created
//writefile
fs.writeFile(path.join(__dirname,'files','write.txt'),'Nice to meet you',(err)=>{
    if(err) throw err;
    console.log("write operation complete")
    fs.appendFile(path.join(__dirname,'files','write.txt'),'\n\nNice to meet you again',(err)=>{
    if(err) throw err;
    console.log("Append operation complete")
    fs.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','newwrite.txt'),(err)=>{
    if(err) throw err;
    console.log("Rename operation complete")
})
})
})
//Above method leads to callback hell

//We can use promises
const fsPromises = require('fs').promises;
const fileops = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','one.txt'),'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files','promiseswrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promiseswrite.txt'),"\nNice to meet you");
        await fsPromises.rename(path.join(__dirname,'files','promiseswrite.txt'),path.join(__dirname,'files','promisesnewwrite.txt'));
        await fsPromises.unlink(path.join(__dirname,'files','one.txt'));
    }catch(err) {
        console.error(err);
    }
}
fileops();

//Suppose if we want to read and write large data in file then it is not possible to do bucket by bucket
const fs = require('fs');
const rs = fs.createReadStream('./files/large.txt',{encoding:'utf-8'});
const ws = fs.createWriteStream('./files/newlarge.txt')
rs.on('data',(dataChunck)=>{ //rs will read the data chuck by chuck then writes to ws
    ws.write(dataChunck);
})
//Instead of above method we can use pipe to copy data from rs to ws
rs.pipe(ws);


