const mongoose = require ('mongoose');


const cakeSchema = mongoose.Schema({
    Name: {
        type: String, require},
      Category: [],
    Weight: [],
    PricesEgg: [],
    PricesEggless: [],
    image: {
        type: String,
        require
      }

    },{
        timestamps:true,
    })
      
      
 
    
    const cakeModel = mongoose.model('cake', cakeSchema);
    module.exports = cakeModel;
