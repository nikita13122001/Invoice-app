const AddModel = require('../models/add_schema');
module.exports = {
    add(addObject){
        return AddModel.create(addObject);
    },
    
}