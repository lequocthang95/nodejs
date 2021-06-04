class SiteController{
    NewsIndex(req, res){
        res.render('news')
    }
    SearchIndex(req, res){
        res.render('search')
    }
}
module.exports = new SiteController();