import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {


  formProduto: FormGroup;

  mensagens={
    nome: [
      {tipo:'required', mensagem:' campo é obrigatório'},
    ],
    descricao:[
      {tipo:'required',mensagem:'campo obrigatório'},
      {tipo:'minlength',mensagem:' campo deve conter no mínino 3 caracteres'}
    ],
    preco:[
      {tipo:'required', mensagem:'campo obrigatório'}
    ],
    dataValidade:[
      {tipo:'required', mensagem:'campo obrigatório'}
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.formProduto = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      descricao:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preco:['',Validators.required],
      dataValidade:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  salvarProduto(){
    console.log('Formulário: ', this.formProduto.valid);
  }

}
