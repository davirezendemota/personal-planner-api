import express from 'express'
const router = express.Router()

import { read } from './api/Tasks/index.js'

router.get('/tasks/read', read)

export default router