import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formLogin: FormGroup;

  mensagens={
    email: [
      {tipo:'required', mensagem:'o campo é obrigatório'},
      {tipo:'email', mensagem:'email inválido'}
    ],
    senha:[
      {tipo:'required',mensagem:'campo obrigatório'},
      {tipo:'minlength',mensagem:'o campo deve conter no mínino 3 caracteres'}
    ]

  };

  constructor(private formBuilder: FormBuilder) {

    this.formLogin = this.formBuilder.group({

      senha:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['', Validators.compose([Validators.required, Validators.email])]


    });
   }

  ngOnInit() {
  }

}
