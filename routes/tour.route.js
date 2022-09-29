const express=require('express')
const { route } = require('../app')
const tourController = require('../controllers/tour.controller')
const router=express.Router()


router
    .route('/:id')
    .patch(tourController.updateTourById)

router
    .route('/trending')
    .get(tourController.getTrendingTour)

router
    .route('/cheapest')
    .get(tourController.getCheapestTour)
    
module.exports=router