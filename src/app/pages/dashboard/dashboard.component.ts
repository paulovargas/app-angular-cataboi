import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { MainComponent } from "../../core/components/main/main.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
