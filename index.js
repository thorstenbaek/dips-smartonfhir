const http = require("http");
const port = 8080;

http.createServer(
    function (req, res) {
        res.write("Hello world!");
        res.end();
    }).listen(port);

console.log(`listening to ${port}`);
