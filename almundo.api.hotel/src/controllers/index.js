let Hotel = require('../model');

module.exports = class Controller{
  async fetchAll(){
    try{
      const HT = await Hotel.find({},(err, data)=>{
        if(err){
          throw new Error("{'status': 404, 'message': ' error en la peticion' }");
        }else{
          if(!data){
            return {'status': 400, 'message':'no hay data'};
          }
          return {'status': 200, 'message': data};
        }
      });
      return await HT
    }catch(error){
      throw (error)
    }
  }

  async save(data,reply){ 
    try{
      let newHotel = await new Hotel({
        _id: data._id,
        name: data.name,
        stars: data.stars,
        price: data.price,
        image: data.image,
        amenities: data.amenities
      });

        return await newHotel.save(newHotel, (err, save)=>{
          if(err){
            console.log(err)
            throw new Error("{'status': 404, 'message': ' error en la peticion' }");
          }
            console.log(save)
            return reply(null,save);
         });

    }catch(error){
      throw (error)
    }
  }

  async update(id, data,reply){ 
    try{
      return await Hotel.findByIdAndUpdate(id,data,async (err,update)=> {
        if(err) {
            throw new Error({status: 404, message: `Failed to update the hotel. Error: ${err}`});

        }
          return await Hotel.findById(update._id,(err,response)=>{
            if(err) {
              throw new Error({status: 400, message: `Failed to update the hotel. Error: ${err}`});
            }
            reply(null, {status:200, message: "Updated successfully.", data:response});
          })
         
  });
    }catch(error){
      throw (error)
    }
  }
  async remove(id,reply){ 
    try{
      return await Hotel.findByIdAndRemove(id,async (err,remove)=> {
        if(err) {
            throw new Error({status: 404, message: `Failed to remove the hotel. Error: ${err}`});

        }
            reply(null, {status:200, message: "remove successfully.", data:remove});
          
         
  });
    }catch(error){
      throw (error)
    }
  }
}