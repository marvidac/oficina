import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'abe-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public user: User;

  constructor() { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  salvar() {
    console.info("salvar");
  }

  reset() {
    this.user = new User();
    console.info("reset");
  }

}
