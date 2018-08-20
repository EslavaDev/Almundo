//HOTELS
const {fetchAllOptions, saveOptions, updateOptions} =require('./Options');
const {fetchAll, save, update} = require('./Controllers');
module.exports.Init = function(server, ...params){
    console.log(`the module Urgents is loaded`);

    server.route({
      options: saveOptions,
      path: "/api/v1/hotel/save",
      method: "POST",
      handler: save
    });

    server.route({
      options: fetchAllOptions,
      path: "/api/v1/hotel/fetchAll",
      method: "GET",
      handler: fetchAll
    })

    server.route({
      options: updateOptions,
      path: "/api/v1/hotel/update/{id}",
      method: "POST",
      handler: update
    })




}