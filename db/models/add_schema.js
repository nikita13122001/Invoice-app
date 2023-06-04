const connection = require('../connection');
const {SchemaTypes} = require('mongoose');
const Schema = connection.Schema;
const addSchema = new Schema({
    
    'Data':{type:SchemaTypes.Array},
    'Totalprice':{type:SchemaTypes.Number},
    'CGST':{type:SchemaTypes.Number},
    'SGST':{type:SchemaTypes.Number},
    'Nettotal':{type:SchemaTypes.Number},
     'a':{type:SchemaTypes.String}
    
});
const AddModel = connection.model('add', addSchema);
module.exports =AddModel;
