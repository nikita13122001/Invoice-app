const addOperations = require('../db/respository/add_operations');
module.exports = {
    async add(request,response){
        const addObject = request.body;
        const result  =await addOperations.add(addObject);
        if(result || result.userid){
            response.json({message:'Record Added'});
            //<h2>record added </h2>
            //{message:'record added'}
        }
        else{
            response.json({message:"Record not Added..."});
        }
    },

}