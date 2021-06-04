const dataset = require('../models/courses')
const { datasetToObject } = require('../../help/helpObject.js')

class HomeController{
    HomeIndex(req,res,next){
        dataset.find({})
            .then ( dataset => {res.render('home',{dataset: datasetToObject(dataset)})} )
            .catch(next)
    }
}
 module.exports = new HomeController();