import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Produto } from "../types/produtos";

@Injectable({providedIn:'root'})

export class Products{
    apiURL = 'http://localhost:3000/produtos/'

    constructor(private http:HttpClient){}

    listarProdutos():Observable<Produto[]>{
        return this.http.get<Produto[]>(this.apiURL)
    }
    adicionarProduto(produto:Produto):Observable<Produto>{
        return this.http.post<Produto>(this.apiURL,produto)
    }
    atualizarProdutos(produto:Produto):Observable<Produto>{
        return this.http.put<Produto>(this.apiURL+produto.id,produto)
    }
    deletarProdutos(id:number):Observable<Produto>{
        return this.http.delete<Produto>(this.apiURL+id)
    }
}
