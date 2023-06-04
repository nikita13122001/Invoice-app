const connection = require('../connection');
const {SchemaTypes} = require('mongoose');
const Schema = connection.Schema;
const searchSchema = new Schema({
    'companyname':{type:SchemaTypes.String, required:true}
});
const SearchModel = connection.model('users', searchSchema);
module.exports =SearchModel;
