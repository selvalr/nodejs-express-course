const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('/home/inba/Desktop/node-express-course/2.express-tutorial/navbar-app/index.html')
const homeStyles = readFileSync('/home/inba/Desktop/node-express-course/2.express-tutorial/navbar-app/style.css')
const homeImage = readFileSync('/home/inba/Desktop/node-express-course/2.express-tutorial/navbar-app/selvalogonb.jpeg')
const homeLogic = readFileSync('/home/inba/Desktop/node-express-course/2.express-tutorial/navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/selvalogonb.jpeg') {
    res.writeHead(200, { 'content-type': 'image/jpeg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)