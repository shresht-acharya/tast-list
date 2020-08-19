const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller.js');

console.log('Router Loaded');

router.get('/', homeController.home);
router.post('/create-task',homeController.newTask);
router.get('/completed-task',homeController.completedTask);
router.get('/delete-task',homeController.deleteTask);


module.exports = router;