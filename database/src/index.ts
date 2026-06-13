// backend production

// import express from 'express'
// import produtosRouter from './routes/produtos.routes.js'
// import cors from 'cors'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const app = express()
// const port = 3000

// app.use(express.json())
// app.use(cors())

// app.use(express.static(path.join(__dirname, '../public')))
// app.use('/produtos', produtosRouter)

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'))
// })

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`)
// })

// backend development

import express from 'express'
import produtosRouter from './routes/produtos.routes.js'
import authRouter from './routes/auth.routes.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/produtos', produtosRouter)
app.use('/auth', authRouter)

app.use((req, res) => {
  res.status(404).json({ 
    error: `Route ${req.method} ${req.url} not found`,
    availableRoutes: [
      'GET /produtos', 
      'POST /produtos', 
      'GET /produtos/:id', 
      'PUT /produtos/:id', 
      'PATCH /produtos/:id', 
      'DELETE /produtos/:id',
      'POST /auth/register',
      'POST /auth/login'
    ]
  })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log(`API produtos em http://localhost:${port}/produtos`)
    console.log(`Auth API disponível em http://localhost:${port}/auth`)
})