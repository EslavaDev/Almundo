const Controllers = require('../controllers');

module.exports = function Actions(options) {
  let HotelController = new Controllers();

  this.add("role:Hotel, cmd:fetchAll", async (msg, reply) => {
    try{
      let hotel = await HotelController.fetchAll();
      reply(null, hotel);
    }catch(err){
      reply(err)
    }
    
  });

  this.add("role:Hotel, cmd:save",  async (msg, reply) => {
    try{
      let data = msg.payload;
      return await HotelController.save(data,reply)
    }catch(err){
      reply(err)
    }
    
  });

  this.add("role:Hotel, cmd:update",  async (msg, reply) => {
    try{
      console.log(msg.payload)
      let data = msg.payload.data;
      let id = msg.payload.id;
      return await HotelController.update(id,data,reply)
    }catch(err){
      reply(err)
    }
    
  });

  this.add("role:Hotel, cmd:remove",  async (msg, reply) => {
    try{
      let data = msg.params;
      return await HotelController.save(data,reply)
    }catch(err){
      reply(err)
    }
    
  });

}
