const Joi = require('joi');


const findByIdOption={
  
    cors: true,
    description: "Use this method to find a services type urgent by id",
    validate:{
        params:{
            id: Joi.number().integer().example("prueba de example").description("this is the id of the service type urgent").required()
        }
    },
    tags:["api","hotel"]

}

const fetchAllOptions={
  
    cors:true,
    description: "Use this method to get list of hotels",
    tags:["api","hotel"]

}

const saveOptions={

    cors:true,
    notes: 
    ` method for created a new Hotel: creating json  \n
    {
      "_id":"String",
      "name":"String",
      "stars":"Number",
      "price":"Number",
      "image":"String",
      "amenities":"[String]"
    }`,
    description: "use this metod for created a Hotel",
    validate:{
      payload:Joi.object().keys({
          _id: Joi.string().max(30).required()
          .description("name of the databases of the eps")
          .label('_id'),
          name: Joi.string().trim().max(40).required()
          .description("id of the care treatment").label('name'),
          start: Joi.number().integer().max(1).optional()
          .description("name of the databases of the eps")
          .label('start'),
          price: Joi.number().integer().max(40).required()
          .description("id of the care treatment").label('price'),
          image: Joi.string().max(30).required()
          .description("name of the databases of the eps")
          .label('image'),
          amenities: Joi.array().max(40).optional()
          .description("id of the care treatment").label('amenities')
      }).label('payload')
  },
  plugins:{
      'hapi-swagger':{
          payloadType: 'json'
      }
  },
    tags:["api","hotel"]

}

const updateOptions={

  cors:true,
  notes: 
  ` method for update a new Hotel: creating json  \n
  {
    "name":"String",
    "stars":"Number",
    "price":"Number",
    "image":"String",
    "amenities":"[String]"
  }`,
  description: "use this metod for update a Hotel",
  validate:{
    params:Joi.object().keys({
      id:Joi.string().required().label('id')
    }).label('params'),
    payload:Joi.object().keys({
        name: Joi.string().trim().max(40).optional()
        .description("id of the care treatment").label('name'),
        start: Joi.number().integer().max(1).optional()
        .description("name of the databases of the eps")
        .label('start'),
        price: Joi.number().integer().max(40).optional()
        .description("id of the care treatment").label('price'),
        image: Joi.string().max(30).optional()
        .description("name of the databases of the eps")
        .label('image'),
        amenities: Joi.array().max(40).optional()
        .description("id of the care treatment").label('amenities')
    }).label('payload')
},
plugins:{
    'hapi-swagger':{
        payloadType: 'json'
    }
},
  tags:["api","hotel"]

}

const removeOptions={

    cors:true,
    description: "use this metod for remove a Hotel",
    validate:{
      params:Joi.object().keys({
        id:Joi.string().required().label('id')
      }).label('params'),
  },
  plugins:{
      'hapi-swagger':{
          payloadType: 'json'
      }
  },
    tags:["api","hotel"]
  
  }

module.exports = {
    fetchAllOptions,
    findByIdOption,
    saveOptions,
    updateOptions,
    removeOptions
}