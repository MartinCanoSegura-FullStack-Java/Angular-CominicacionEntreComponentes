import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  x = '* Titulo desde el Padre - App';

  totalRecibido: number;

  val: number = 3;

  recibirEmision(e: any){
    console.log(e);
    this.totalRecibido = e;
  }



}
