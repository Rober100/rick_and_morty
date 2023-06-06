// const http = require("http");
// const  {getCharById} = require("./Controllers/getCharById")


// http
// .createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//     const id = req.url.split("/").at(-1);

//     getCharById(res, +id);
//     };

// }).listen(3001)

const server = require("./app")
const PORT = 3001;
const { conn } = require("./DB_connection")

conn.sync( {force: false} )

server.listen(PORT, () => {
    console.log(`Sever raised in port: ${PORT}`)
}); 