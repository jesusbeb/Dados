import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice2.png';
  
  numero1 = 1;
  numero2 = 2;



  tirarDados(): void{
    //Math.random() regresa un numero aleatorio en 0 y 1
    //Se multiplica *5 y al valor final se le suma 1 para que no nos de valores de 0 ni de 7
    //Math.round redondea al numero entero mas cercano
    this.numero1 = Math.round(Math.random()*5)+1;
    this.numero2 = Math.round(Math.random()*5)+1;

    
  }
}
