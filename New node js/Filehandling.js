const fs = require('fs')

// fs.writeFile('data.txt','Hello, Node js',(err)=>{
//     if(err) throw err;
//     console.log('File created')
// })

// fs.appendFile('data1.txt','\nNew content created',(err)=>{
//     if(err) throw err;
// })

// process.chdir('New Node js')
// console.log(process.cwd())

// fs.unlink('data1.txt',(err)=>{
//     if(err) throw err;
//     console.log('File deleted')
// })

// fs.rename('data.txt','newdata.txt',(err)=>{
//     if(err) throw err;
//     console.log('File renamed')
// })

// if(fs.existsSync('newdata1.txt')) {
//     console.log("File exists")
// }
// else {
//     console.log("File doesn't exists")
// }

// async function updatefile() {
//     let data = await fs.readFile('newdata.txt','utf8')
//     console.log(data)
//     data = data.replaceAll('New','Old')
//     await fs.writeFile('newdata1.txt',data)
//     console.log('File updated')
// }
// updatefile()

const readstream = fs.createReadStream('newdata.txt','utf8')
// console.log(readstream)
const writestream = fs.createWriteStream('newdata2.txt')
readstream.on('data',chunck=>{
    writestream.write(chunck.replaceAll('New','Old'))
})

// Handle end event
readstream.on('end',()=>{
    fs.renameSync('newdata.txt','data.txt')
    console.log('File renamed')
})