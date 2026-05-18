import type { Request, Response } from 'express'
import {
    criarProdutoDto,
    atualizarProdutoDto,
    substituirProdutoDto,
} from '../dtos/produto.dto.js'

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

// GET /produtos
export function listarProdutos(req: Request, res: Response) {
    res.json(produtos)
}

// GET /produtos/:id
export function buscarProduto(req: Request, res: Response) {
    const id = Number(req.params.id)
    const produto = produtos.find(p => p.id === id)
    
    if (!produto) {
        res.status(404).json({ erro: 'Produto não encontrado.' })
        return
    }

    res.json(produto)
}

// POST /produtos
export function criarProduto(req: Request, res: Response) {
    const resultado = criarProdutoDto.safeParse(req.body)

    if (!resultado.success) {
        res.status(400).json({ erros: resultado.error.flatten().fieldErrors })
        return
    }
    //adicionei essa linha pra inicializar o proximoId com o valor da lista se eu precisar trocar o numero de itens em algum momento
    let proximoId = produtos.length == 0 ? 1: produtos.length+1;

    const { name, desc, price } = resultado.data
    const novo: Produto = { id: proximoId++, name, desc, price }
    produtos.push(novo)
    res.status(201).json(novo)
}

// PUT /produtos/:id
export function substituirProduto(req: Request, res: Response) {
    const id = Number(req.params.id)
    const resultado = substituirProdutoDto.safeParse(req.body)

    if (!resultado.success) {
        res.status(400).json({ erros: resultado.error.flatten().fieldErrors })
        return
    }

    const indice = produtos.findIndex(p => p.id === id)

    if (indice === -1) {
        res.status(404).json({ erro: 'Produto não encontrado.' })
        return
    }

    produtos[indice] = { id, ...resultado.data }
    res.json(produtos[indice])
}

// PATCH /produtos/:id
export function atualizarProduto(req: Request, res: Response) {
    const id = Number(req.params.id)
    const resultado = atualizarProdutoDto.safeParse(req.body)

    if (!resultado.success) {
        res.status(400).json({ erros: resultado.error.flatten().fieldErrors })
        return
    }

    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        res.status(404).json({ erro: 'Produto não encontrado.' })
        return
    }
    Object.assign(produto, resultado.data)
    res.json(produto)
}

// DELETE /produtos/:id
export function removerProduto(req: Request, res: Response) {
    const id = Number(req.params.id)
    const indice = produtos.findIndex(p => p.id === id)

    if (indice === -1) {
        res.status(404).json({ erro: 'Produto não encontrado.' })
        return
    }
    produtos.splice(indice, 1)
    res.status(204).send()
}