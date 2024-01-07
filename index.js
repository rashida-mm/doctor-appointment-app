//import the json server we installed
const jsonServer = require('json-server')

//create a server application
const medexpServer = jsonServer.create()

//setup path for db.json file we have with us (router to give path)
const router = jsonServer.router('db.json')

//return a middleware instance used by json-server
const middleware = jsonServer.defaults()

//setup port for db.json
const port = 4000

//mention that we use both middleware and router in backend
medexpServer.use(middleware)
medexpServer.use(router)

//run the server
medexpServer.listen(port,()=>{
    console.log('medexp server listening on the port' +port);
})