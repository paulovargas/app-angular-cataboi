import { Component } from '@angular/core';
import { TodosRebanhosComponent } from "./todos-rebanhos/todos-rebanhos.component";

@Component({
  selector: 'app-rebanhos',
  standalone: true,
  imports: [
    TodosRebanhosComponent
  ],
  templateUrl: './rebanhos.component.html',
  styleUrl: './rebanhos.component.css'
})
export class RebanhosComponent {

}
