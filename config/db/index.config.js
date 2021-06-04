const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/mydatas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('kết nối data thanh cong')
    } 
    catch(error){
        console.log('kết nối data thất bai')
    }
}

module.exports = {connect};
