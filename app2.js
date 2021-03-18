const http = require('http') //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1' //get our ip address from the environment
const port = process.env.port || 3001 //and the port

const server =
    http.createServer( //Creates the response loop
        (req, res) => { //Anonymous function to handle the request
            res.statusCode = 200 //code for OK
            res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

            res.write('<html> <head> <title> Table </title> </head>')
            res.write('<body>')
            res.write('<table>')
            res.write('<tr>')
            res.write('<th>Location</th>')
            res.write('<th>Hours to spend</th>')
            res.write('<th>Expenses</th>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<th>kedaranath</th>')
            res.write('<th>10</th>')
            res.write('<th>$200</th>')
            res.write('</tr>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<th>bhadrachalam</th>')
            res.write('<th>5 </th>')
            res.write('<th>$100</th>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<th>tirupathi</th>')
            res.write('<th>15 </th>')
            res.write('<th>150</th>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<th>St. louis gateway arch</th>')
            res.write('<th>5 </th>')
            res.write('<th>$16</th>')
            res.write('</tr>')
            res.write('</table>')
            res.end('</body></html>')
                //Close the response
        }
    )

server.listen(port, hostname, () => { //Start the server
    console.log(`Server running at http://${hostname}:${port}/`) //Log the request
})