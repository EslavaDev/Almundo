const seneca = require("seneca")();
const { getDatabaseConfig,getMicroServiceHotel } = require("./src/Config");
const Script = require('./src/scripts')
seneca.use(require('./src/actions'));

//correr por socket
let mongoose = require('mongoose');

try{
	mongoose.connect(`mongodb://${getDatabaseConfig().host}:${getDatabaseConfig().port}/${getDatabaseConfig().db}`, async (err, res) =>{
		if(err){
			throw err;
		}else{
			console.log("Base de datos Conectada Correctamente");
			Script()
			await seneca.listen(getMicroServiceHotel());
		}
	});

}catch(err){
	console.error(err);
}