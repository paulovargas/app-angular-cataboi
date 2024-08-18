import { Component } from '@angular/core';
import { TodosAnimaisComponent } from "./todos-animais/todos-animais.component";

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [TodosAnimaisComponent],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css'
})
export class AnimaisComponent {

}
