import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formLogin = this.formBuilder.group({
    nomeCampo: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
