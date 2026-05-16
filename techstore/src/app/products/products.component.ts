import { Component, OnInit } from '@angular/core';
import { Produto } from '../types/produtos';
import { Products } from '../shared/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
  mostrarForm = false;

  produtos: Produto[] = []
  produtoForm!: FormGroup
  produtoFormUpdate!: FormGroup

  constructor(private products:Products,private fb:FormBuilder){}

  ngOnInit(): void {
    this.carregarProdutos();
    this.produtoForm = this.fb.group({
      name:["",Validators.required],
      desc:["",Validators.required],
      price:[0,Validators.required],
    })
    this.produtoFormUpdate = this.fb.group({
      id:[0,Validators.required],
      name:["",Validators.required],
      desc:["",Validators.required],
      price:[0,Validators.required],
    })
  }
  carregarProdutos(): void {
    this.products.listarProdutos()
      .subscribe({
        next: (dados) => {
          this.produtos = dados;
        },
        error: (erro) => {
          console.error('Erro ao buscar produtos', erro);
        }
      });
  }
  adicionarProdutos(): void{
    if(this.produtoForm.valid){
      let produtoNovo: Produto = {
        name: this.produtoForm.get('name')?.value,
        desc: this.produtoForm.get('desc')?.value,
        price: this.produtoForm.get('price')?.value,
      }
      this.products.adicionarProduto(produtoNovo)
      .subscribe({
        next: (dados) => {
          this.produtoForm.reset();
          console.log('Produto adicionado!');
        },
        error: (erro) => {
          console.error('Erro ao criar produto', erro);
        }
      });
      this.carregarProdutos();
    }
  }
  atualizarProdutos(id:number): void{
    if(this.produtoFormUpdate.valid){
      let produtoNovo: Produto = {
        name: this.produtoFormUpdate.get('name')?.value,
        desc: this.produtoFormUpdate.get('desc')?.value,
        price: this.produtoFormUpdate.get('price')?.value,
      }
      this.products.atualizarProdutos(produtoNovo)
      .subscribe({
        next: (dados) => {
          this.produtoFormUpdate.reset();
          console.log('Produto atualizado!');
          this.carregarProdutos();
        },
        error: (erro) => {
          console.error('Erro ao atualizar produto!', erro);
        }
      });
      this.carregarProdutos();
    }
  } 
  exibirForm(): void {
    this.mostrarForm = !this.mostrarForm;
  }
  
  exibirFormClick(): void {
    this.mostrarForm = true;
  }
    // deletarProduto(id:number): void{
    //   console.log('Produto removido!');
    // }

}
