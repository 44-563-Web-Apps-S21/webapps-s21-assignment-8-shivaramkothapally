const http = require('http') //Pull in a useful node package
var fs = require('fs');

const hostname = process.env.hostname || '127.0.0.1' //get our ip address from the environment
const port = process.env.port || 3001 //and the port

const server =
    http.createServer( //Creates the response loop
        (req, res) => { //Anonymous function to handle the request
            if (req.url === '/watercycle') {
                fs.readFile("response.html", function(error, pgResp) {
                    if (error) {
                        res.writeHead(404);
                        res.write('Page not found');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write(pgResp);
                    }
                    res.end();
                });
            }
        }
    )

server.listen(port, hostname, () => { //Start the server
    console.log(`Server running at http://${hostname}:${port}/`) //Log the request
})