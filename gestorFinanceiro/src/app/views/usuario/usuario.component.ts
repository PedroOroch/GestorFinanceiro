import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/Models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  mostrarUsuario: Usuario[] = [];
  usuario?: Usuario;
  isEditn = false;
  addUsuario = 'addUser';
  nintendoSwitch = true;

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.showUser();
    this.nintendoSwitch = false;
  }

  showUser()
  {
    this.usuarioService.mostraUsuario().subscribe(usuario => {
      this.mostrarUsuario = usuario;
    });
  }

  newUser()
  {
    this.usuario = new Usuario()
    this.isEditn = false;
  }

  cancel()
  {
    this.usuario = undefined;
  }

  saveUser()
  {
    if(!this.usuario) {
      return;
    }

    if(!this.isEditn)
    {
      this.usuarioService.criaUsuario(this.usuario).subscribe(usuario => {
        this.showUser();
        this.cancel();
        this.nintendoSwitch = false;
      })
    } else {
      this.usuarioService.editaUsuario(this.usuario).subscribe(usuario => {
        this.showUser()
        this.cancel();
        this.nintendoSwitch = false;
      });
    }
  }

  deleteUser(id?: number)
  {
    if(!id) {
      return;
    }

    const RESPOSTA = confirm('Esse usuário será excluído ok?');

    if (RESPOSTA) {
      this.usuarioService.deleteUsuario(id).subscribe(( ) => {
        this.showUser();
        this.nintendoSwitch = true;
      });
    }
  }

  selectUser(usuario: Usuario)
  {
    this.usuario = usuario;
    this.isEditn = true;
  }


}
