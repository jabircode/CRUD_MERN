let mongoose = require('mongoose')
express = require('express')
router = express.Router()

//student model
let studentSchema = require('../models/student')

//CREATE student
router.route('/create-student').post((request, respond, next) => {
    studentSchema.create(request.body, (error, data) => {
        if(error) {
            return next(error)
        } else {
            console.log(data)
            respond.json(data)
        }
    })
})

//READ Students
router.route('/').get((request, respond) => {
    studentSchema.find((error, data) => {
        if(error) {
            return next(error)
        } else {
            respond.json(data)
        }
    })
})

//GET single student
router.route('/edit-student/:id').get((request, respond) => {
    studentSchema.findById(request.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            respond.json(data)
        }
    })
})

//Update student
router.route('/update-student/:id').put((request, respond, next) => {
    studentSchema.findByIdAndUpdate(request.params.id, {
        $set: request.body
    }, (error, data) => {
        if(error) {
            return next(error)
            console.log(error)
        } else {
            respond.json(data)
            console.log('Student updated successfully!')
        }
    })
})

//DELETE student
router.route('/delete-student/:id').delete((request, respond, next) => {
    studentSchema.findByIdAndRemove(request.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            respond.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router