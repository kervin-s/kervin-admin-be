import express from 'express'
const router = express.Router()
import * as userController from '../../controller/user'


router.get('/login', userController.login)



export default router