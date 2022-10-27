const http = require("http")
const path = require("path")
const fs = require("fs")
const port = process.env.PORT || 4000

http.createServer(function(req, res) {
  let url = req.url
  if (req.method === "GET") {
    if (url === "/") {
      fs.readFile("./public/home.html", "UTF-8", (error, html) => {
        if (error) {
          res.write("An error occured!")
          res.end()
        }
        else {
          res.statusCode = 200
          res.setHeader("Content-Type", "text/html")
          res.end(html)
        }
      })
    }
    else if (url === "/home") {
      fs.readFile("./public/home.html", "UTF-8", (error, html) => {
        if (error) {
          res.write("An error occured!")
          res.end()
        }
        else {
          res.statusCode = 200
          res.setHeader("Content-Type", "text/html")
          res.end(html)
        }
      })
    }  
    else if (url === "/about") {
      fs.readFile("./public/about.html", "UTF-8", (error, html) => {
        if (error) {
          res.write("An error occured!")
          res.end()
        }
        else {
          res.statusCode = 200
          res.setHeader("Content-Type", "text/html")
          res.end(html)
        }
      })
    }
    else if (url === "/contact") {
      fs.readFile("./public/contact.html", "UTF-8", (error, html) => {
        if (error) {
          res.write("An error occured!")
          res.end()
        }
        else {
          res.statusCode = 200
          res.setHeader("Content-Type", "text/html")
          res.end(html)
        }
      })
    }
    else {
      res.statusCode = 400
      res.write("Error :( This page does not exist")
      res.end()
    }
  }
  else {
    res.write(":( You can not perform such operation...")
    res.end()
  }
}).listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})