const Hotel= require('../model/');
const data = require('../data/data.json');
const script = () => {

  Hotel.find().countDocuments().then(response => {
		if (response != 0) {
      console.log('hay data');
			return;
		}
		for (let i in data) {
			let hotelData = {
        _id:data[i].id,
				name: data[i].name,
				stars: data[i].stars,
				price: data[i].price,
				image: data[i].image,
				amenities: data[i].amenities
			};
			new Hotel(hotelData).save();
		}
  });
  
}

module.exports = script;