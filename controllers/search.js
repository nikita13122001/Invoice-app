const searchOperations = require('../db/respository/search_operations');
module.exports = {
    search(request, response){
        const searchObject = request.body;
        console.log('Request Body is ', userObject);
        searchOperations.read(searchObject, response);
    }
}