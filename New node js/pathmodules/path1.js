const path = require('path')
const fs = require('fs')

// path.join()
const filepath = path.join('src','components','App.jsx')
console.log(filepath)

//path.resolve()
const result1 = path.resolve('index.js')
console.log(result1)
const result2 = path.resolve('src','components','index.jsx')
console.log(result2)
const result3 = path.resolve('/public','index.html')
console.log(result3)
const result4 = path.resolve('pathmodules','..','config','db.js')
console.log(result4)

console.log(__dirname)
console.log(path.resolve('data.txt'))
console.log(path.resolve(__dirname,'data.txt'))

fs.readFile(path.resolve('..','data.txt'),'utf-8',(err,data)=>{
    if(err) throw err
    else {
        console.log(data)
    }
})

//path.basename()
const result5 = path.basename('/home/user/file.txt')
console.log(result5)
const result6 = path.basename('/home/user/file.txt','.txt')
console.log(result6)
const result7 = path.basename(__filename)
console.log(result7)

//path.dirname()
const result8 = path.dirname('/home/user/file.txt')
console.log(result8)
const result9 = path.dirname('C:\\projects\\node\\index.js')
console.log(result9)
console.log(path.dirname(__filename))
const filepath1 = path.resolve(__dirname,'logs','app.log')
console.log(path.dirname(filepath1))

//path.extname
console.log(path.extname('index.html'))
const result10 = path.extname('/home/user/file.txt')
console.log(result10)
console.log(path.extname('index'))
console.log(path.extname('archieve.tar.gz'))
const file = 'app.js'
const name = path.basename(file, path.extname(file))
console.log(name)

//path.parse()
const result11 = path.parse('/home/user/file.txt')
console.log(result11)

//path.format()
const pathobj = {
    dir: '/home/user/docs',
    // base: 'file.txt'
    name : 'file',
    ext : '.txt'
}
const filepath2 = path.format(pathobj)
console.log(filepath2)
//index.html => index.css
function changeextension(filepath,newext) {
    const parsed = path.parse(filepath)
    console.log(parsed)
    parsed.ext = newext
    parsed.base = parsed.name+parsed.ext
    return path.format(parsed)
}
console.log(changeextension('/docs/index.html','.css'))

//path.isAbsolute
console.log(path.isAbsolute('/home/user/file.txt'))
console.log(path.isAbsolute('file.txt'))
console.log(path.isAbsolute('C:\\Users\\Admin\\app.js'))
console.log(path.isAbsolute('\\Users\\Admin\\app.js'))
console.log(path.isAbsolute('Users\\Admin\\app.js'))

//path.normalize()
const result12 = '\home\\user\\\docs\\\lile.txt'
console.log(result12)