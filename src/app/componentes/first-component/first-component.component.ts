import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  nome:string = "Gustavo"
  idade:number = 20
  trabalho:string = "Estag"
  hobbies = ["Futebol" , "Games"]
  carro = {marca: "ford", modelo: "KA FREESTYLE 1.5 AT6"}

}
