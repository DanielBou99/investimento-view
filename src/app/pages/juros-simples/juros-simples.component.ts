import { JurosSimples } from './../../model/juros-simples';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.scss'],
})
export class JurosSimplesComponent implements OnInit {
  juros: JurosSimples = new JurosSimples();
  mostrarResultado: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  calcular() {
    console.log(this.juros);
    this.mostrarResultado = true;
  }
}
