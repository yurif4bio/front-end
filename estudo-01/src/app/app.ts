import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  numero = 0

  incrementar(){
    if (this.numero < 10) {
      this.numero++;
    }
  }

  decrementar(){
    if (this.numero > 0) {
      this.numero--;
    }
  }
  protected readonly title = signal('estudo-01');
}
