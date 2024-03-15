import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteDoGugaComponent } from './componentes/componente-do-guga/componente-do-guga.component';
import { FirstComponentComponent } from './componentes/first-component/first-component.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FirstComponentComponent,ComponenteDoGugaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
