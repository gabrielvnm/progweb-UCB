import express from 'express'
import produtosRouter from './routes/produtos.routes.js'
import cors from 'cors'

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())

// registro de rotas
app.use('/produtos', produtosRouter)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})