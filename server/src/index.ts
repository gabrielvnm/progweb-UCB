import express from 'express'
import type { Request, Response } from 'express'
import cors  from 'cors'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

type Produto = { 
    id: number;
    name: string;
    desc: string;
    price: number;
};

let produtos: Produto[] = [
    { id: 1, name: 'Mouse',desc:'lorem ipsum bablablabla', price: 49.99 },
    { id: 2, name: 'Teclado',desc:'lorem ipsum bablablabla', price: 99.99 },
    { id: 3, name: 'Monitor',desc:'lorem ipsum bablablabla', price: 499.99 },
];

app.get('/produtos', (req: Request, res: Response) => {
    res.json(produtos);
});
1
app.get('/produtos/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).json({ erro: 'Produto não encontrado.' });
        return;
    }
    res.json(produto);
});

app.post('/produtos', (req: Request, res: Response) => {
    const { name, desc, price } = req.body;
    
    if (!name || price === undefined) {
        res.status(400).json({ erro: 'name e preço são obrigatórios.' });
        return;
    }
    let proximoId = produtos.length == 0 ? 1: produtos.length+1;

    const novo: Produto = { id: proximoId++, name, desc, price };
    produtos.push(novo);
    res.status(201).json(novo);
});

app.put('/produtos/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name, desc, price } = req.body;

    if (!name || price === undefined) {
        res.status(400).json({ erro: 'Envie todos os campos.' });
        return;
    }

    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        res.status(404).json({ erro: 'Produto não encontrado.' });
        return;
    }

    produtos[indice] = { id, name, desc, price };
    res.json(produtos[indice]);
});

app.patch('/produtos/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        res.status(404).json({ erro: 'Produto não encontrado.' });
        return;
    }

    Object.assign(produto, req.body);
    res.json(produto);
});

app.delete('/produtos/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        res.status(404).json({ erro: 'Produto não encontrado.' });
        return;
    }
    produtos.splice(indice, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});