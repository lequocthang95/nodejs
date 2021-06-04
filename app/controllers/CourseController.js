const Course = require('../models/courses')
const { datasetToObject } = require('../../help/helpObject.js')
const { dataToOject } = require('../../help/helpObject')
const { countDocuments } = require('../models/courses')


class CourseController{
    show(req,res,next){
        Course.findOne({slug: req.params.slug})
            .then( course => res.render('courses/show',{course: dataToOject(course)}))
            .catch(next)
    }
    create(req,res,next){
        res.render('courses/create')
    }
    savedata(req,res,next){
        const formData = {...req.body};
        formData.slug =`${formData.name}`
        formData.image =`https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLjreL0sMqNqB3VHP94Pu9Omsk1Q`
        const course = new Course(formData)
        course.save();
        res.redirect('store')
    }
    store(req,res,next){
        Promise.all([Course.find({}).sortable(req),Course.countDocumentsDeleted()]) 
        .then (([courses,countsDeleted]) =>
            res.render('courses/store',
                {countsDeleted,courses: datasetToObject(courses)}) 
            )
        .catch(next)
    }
    edit(req,res,next){
        Course.findById(req.params.id)
            .then( course => res.render('courses/edit',{course: dataToOject(course)}))
            .catch(next)  
    }
    update(req,res,next){
        const formData = {...req.body};
        const form ={
            slug : `${formData.name}`,
            image : `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLjreL0sMqNqB3VHP94Pu9Omsk1Q`,
        }
        const updatecourse = Object.assign(formData,form);
        Course.updateOne({ _id: req.params.id},updatecourse)
            .then(() =>res.redirect('/courses/store'))
            .catch(next)   
    }
    hidden(req,res,next){
        Course.delete({ _id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trashbin(req,res,next){
        Promise.all([Course.findDeleted({}).sortable(req),Course.countDocuments()]) 
        .then (([courses,countsCourse]) =>
            res.render('courses/trashbin',{countsCourse,courses: datasetToObject(courses)}) )
        .catch(next)
    }
    delete(req,res,next){
        Course.deleteOne({ _id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    restore(req,res,next){
        Course.restore({ _id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    actionHidden(req,res,next){
        Course.delete({ _id: {$in :req.body.courseIds}})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    actionDelete(req,res,next){
        Course.deleteOne({ _id: {$in :req.body.courseIds}})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    actionRestore(req,res,next){
        Course.restore({ _id: {$in :req.body.courseIds}})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
}
module.exports = new CourseController();    