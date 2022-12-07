import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/Models/compra';
import { Usuario } from 'src/Models/usuario';
import { CompraService } from 'src/app/services/compra.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent implements OnInit {

  listaCompra: Compra[ ] = [ ];
  compra?: Compra;
  isEditn = false;
  buscaCompra: any;
  sum: number = 0;


  constructor( private compraService: CompraService ) { }

  ngOnInit(): void {
    this.listar();
    // this.totalCompra();
  }

  listar()
  {
    this.compraService.listar().subscribe(compra => {
      this.listaCompra = compra;
    });
  }

  novo()
  {
    this.compra = new Compra();
    this.isEditn = false;
  }

  cancelar()
  {
    this.compra = undefined;
  }

  salvar()
  {
    if(!this.compra){
        return;
      };

    if(!this.isEditn){
      this.compraService.inserir(this.compra).subscribe(compra => {
        this.listar();
        this.cancelar();
      });
    } else {
      this.compraService.atualizar(this.compra).subscribe(compra => {
        this.listar();
        this.cancelar();
      });
    }
  }

  excluir(id?: number)
  {
    if(!id) {
      return;
    }

    const RESPOSTA = confirm('Esta compra será excluída ok?');

    if(RESPOSTA) {
      this.compraService.excluir(id).subscribe((  ) => {
        this.listar();
      });
    }
  }

  selecionar(compra: Compra)
  {
    this.compra = compra;
    this.isEditn = true;
  }


//  totalCompra()
//  {


  // for(const i = 0; i < this.listaCompra.length; i++); {
  //   this.sum += this.listaCompra[i].preco;
  // }

  // return this.sum;

  // const TOTAL = this.listaCompra.reduce<number>((sum, compra) => {
  //   return sum + compra.preco;
  // }, 0);

  // console.log(TOTAL);
//  }



}

// const arr = [
//   {id: 1, salary: 10},
//   {id: 2, salary: 20},
//   {id: 3, salary: 30},
// ];

// const sum = arr.reduce((accumulator, object) => {
//   return accumulator + object.salary;
// }, 0);

// console.log(sum); // 👉️ 60
