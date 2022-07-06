const express=require('express');
const route=express.Router()

const services=require('../services/render')
const controller=require('../controller/controller')

/**
 * @description Root Route
 * @method GET/
 */


route.get('/', services.homeRoutes)

/**
 * @description add user
 * @method GET /add-user
 */

route.get('/add-user',services.add_user)

/**
 * @description Update user
 * @method GET /update-user
 */
route.get('/update-user',services.update_user)

//API
route.post('/api/uers',controller.create);
route.get('/api/uers',controller.find);
route.put('/api/uers/:id',controller.update);
route.delete('/api/uers/:id',controller.delete);

module.exports=route