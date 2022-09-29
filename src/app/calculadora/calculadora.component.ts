import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //COMUNICACION DE PADRE A HIJO:
  @Input()
  tituloPadre: string;

  //COMUNICACION DE HIJO A PADRE
  @Output()
  emisor = new EventEmitter();


  num1: number;
  num2: number;
  total: number;

  num3: number;
  num4: number;
  tot: number;

  constructor() { }

  ngOnInit(): void {
  }

  recibirTecla1(e: any){
    this.num1 = +e.target.value;
  }

  recibirTecla2(e: any){
    this.num2 =  +e.target.value;
  }

  calcular(operacion: string){
    switch (operacion) {
      case 's':
        this.total = this.num1 + this.num2;
        break;

      case 'r':
        this.total = this.num1 - this.num2;
        break;

      case 'm':
      this.total = this.num1 * this.num2;
      break;

      case 'd':
        this.total = this.num1 / this.num2;
        break;
    }
  }

  calcula(operacion: string){
    switch (operacion) {
      case 's':
        this.tot = this.num3 + this.num4;
        break;

      case 'r':
        this.tot = this.num3 - this.num4;
        break;

      case 'm':
      this.tot = this.num3 * this.num4;
      break;

      case 'd':
        this.tot = this.num3 / this.num4;
        break;
    }

    this.emisor.emit(this.tot);
  }

}
