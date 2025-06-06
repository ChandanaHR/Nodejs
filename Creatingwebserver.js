//A web server is a software or hardware that:

//Receives HTTP requests from clients (like browsers)

//Processes those requests

//Sends back HTTP responses, such as web pages, JSON data, or files
//An HTTP request is a message sent from a client (usually a browser) to a server to ask for data or perform some action.
//| Method   | Use Case                                 |
| -------- | ---------------------------------------- |
| `GET`    | Retrieve data (e.g., fetch a webpage)    |
| `POST`   | Submit data (e.g., a form or login info) |
| `PUT`    | Update existing data                     |
| `DELETE` | Remove data                              |

  const webserver = require('http')
const httpserver = webserver.createServer((req,res)=>{
    console.log(`Requested url:${req.url}`);
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('Welcome to Node js server')
    res.end();
})
httpserver.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

const webserver = require('http'); //This module lets you create a web server and handle HTTP requests/responses
const httpserver = webserver.createServer((req, res) => { ... });
/*Creates an HTTP server.
It takes a callback function with 2 parameters:
req (request): Incoming request from the client
res (response): The response you'll send back*/
res.writeHead(200, { 'Content-Type': 'text/html' }); 
/*Sends an HTTP status code and response headers.
200 means success.
'Content-Type': 'text/html' tells the browser that the response is HTML content.*/
res.write('Welcome to Node js server')
//Writes the actual HTML content to be shown in the browser
res.end() //It tells the browser i am done with sending the data
httpserver.listen(3000,()=>{
    console.log("Server is running on port 3000")
}) //Starts the server and makes it listen for incoming requests on port 3000.


//2. if you want to add multiple routes (like /about, /contact), or connect to HTML files!
const webserver = require('http')
const httpserver = webserver.createServer((req,res)=>{
    console.log(`Requested url:${req.url}`);
    if(req.url === '/') {
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(`<h1>Home page</h1><p>Welcome to home page</p>`);
    }
    else if(req.url === '/about' ) {
        res.write(`<h1>About page</h1><p>Welcome to about page</p>`);
    }
    else if(req.url === '/contact' ) {
        res.write(`<h1>Contact page</h1><p>Welcome to contact page</p>`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(`<h1>404 - Page Not Found</h1>`);
    }
   // res.write('Welcome to Node js server')
    res.end();
})
httpserver.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

//3 Creating HTML files
const webserver1 = require('http')
const fs = require('fs')
const path = require('path')
const http1server = webserver1.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {
        res.writeHead(204); // No Content
        res.end();
        return;
    }
    let filepath = path.join(__dirname, req.url==='/'? 'index.html': req.url+'.html');
    fs.readFile(filepath, (err,content)=>{
        if(err) {
            res.writeHead(404,{'Content-type':'text/html'})
            res.end(`<h1>404-Page not found</h1>`)
        }
        else {
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(content)
        }
    });
});
http1server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
