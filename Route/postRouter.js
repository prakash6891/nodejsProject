import express from 'express'
const router = express.Router()
import postController from "../Controller/postController.js"

router.get('/posts', postController.post_controller)
router.post('/newpost', postController.new_post_controller)

export default router