import express from 'express'
import bodyParser from 'body-parser'
const api = express()
const host = 'localhost'
const port = 3333

import apiRoutes from './routes.js'

api.use(apiRoutes)

api.use((req,res) => {
  res.status(404).json({data:"Route not found"})
})

api.listen(port, () => console.log(`API running at ${host}:${port}`))