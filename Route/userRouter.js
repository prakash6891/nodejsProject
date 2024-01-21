import express from 'express'
const router = express.Router()
import userController from "../Controller/userController.js"

router.get('/users', userController.user_controller)
router.post('/newUser', userController.user_register_controller)
router.post('/getUserById', userController.getUser_controller)


export default router