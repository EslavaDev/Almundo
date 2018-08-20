const hapi = require('hapi');
const chairo = require('chairo');
const Inert = require('inert');
const Vision = require('vision');
const path = require('path');
const HapiSwagger = require('hapi-swagger');
const Swagger = require('./Swagger');
const { promisify, format  } = require('util');
const fs = require('fs');
const readDirAsync = promisify(fs.readdir);
const { getMicroServiceHotel } = require("./Config");

module.exports.Init = async function(config){

  const server = new hapi.Server({
    port: config.port,
    host: config.host
  });
  console.log(path.join(__dirname,'../build'))
  await server.register([
    Vision,
    Inert
  ]);


  await server.register({
    plugin: HapiSwagger,
    options: Swagger
  })
  await server.register(chairo);
  server.seneca.
  client(getMicroServiceHotel())


   await server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        directory: {
          path: path.join(__dirname, '../build'),
          listing: false,
          index: true
        }
      }
  });




let modulesPath = path.join(__dirname, "modules");
let directories =  await readDirAsync(modulesPath);
directories.forEach((dirName, index)=>{
    let dirPath = path.join(modulesPath,dirName);
        if(fs.statSync(dirPath).isDirectory()){
            require(dirPath).Init(server, config);
        }
})

  await server.start();
  console.log(`the server is runing at ${server.info.port}`)

};