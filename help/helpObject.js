module.exports = {
    datasetToObject: function(mongooses){
       return mongooses.map( mongooses => mongooses.toObject())
    },
    dataToOject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}