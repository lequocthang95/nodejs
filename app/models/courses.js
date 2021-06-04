const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    name: { type: String, Required: true,},
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 600 },
    lever: { type: String, maxLength: 600 },
    videoId: { type: String},
    slug: { type: String, slug:"name"}
  },
  {timestamps: true});
// sort course
  CourseSchema.query.sortable = function (req){
    if (req.query.hasOwnProperty('_sort')){
       const checktype = ['asc','desc'].includes(req.query.type);
       return this.sort({
           [req.query.column]: checktype ? req.query.type : 'desc'
       })
    }
    else { return this}
  }

  mongoose.plugin(slug);
  CourseSchema.plugin(mongoose_delete,{deleteAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('courses', CourseSchema);  