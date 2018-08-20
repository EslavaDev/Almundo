const path = require("path");
const nconf = require("nconf");

const configProvider = new nconf.Provider({
    env: true,
    store:{
        type: "file",
        file: path.join(__dirname,`./../config/config.${process.env.NODE_ENV || "dev" }.json`)
    }
});


module.exports.getServerConfig = ()=>{
    return configProvider.get("Server");
}

 module.exports.getMicroServiceHotel= ()=>{
    return configProvider.get("Hotel");
 }