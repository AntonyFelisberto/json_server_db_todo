const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middleware = jsonServer.defaults();

server.use(
    jsonServer.rewriter({
        "/*":"/$1"
    })
)

server.use(router);

server.listen(3000,()=>{
    console.log("Json server esta rodando")
})

module.exports = server;