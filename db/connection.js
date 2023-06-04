const mongoose = require('mongoose');
const URL = "mongodb+srv://nikita:gupta@cluster0.gan5dpn.mongodb.net/billapp?retryWrites=true&w=majority";


mongoose.connect(URL,(err)=>{
    if(err){
        console.log('Connection Error ', err);
    }
    else{
        console.log('Connected....');
    }
});
module.exports = mongoose;