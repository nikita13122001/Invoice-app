const SearchModel = require('../models/search_schema');
module.exports = {
    read(searchObject, response){
        SearchModel.findOne({'companyname':searchObject.companyname}, (err,doc)=>{
            if(err){
                response.json({message:'Error in DB '});
                console.log(err);
            }
            else if(doc && doc.userid){
                response.json({message:'Record found '+userObject.userid});
            }
            else{
                response.json({message:'Record not found'});
            }
        });
    }
}