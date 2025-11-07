import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  numeroSelecionado = 0;
  numeros = [1,2,3,4,5,6,7,8,9,10];
  
  protected readonly title = signal('estudo-01');

}