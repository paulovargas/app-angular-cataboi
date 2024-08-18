import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-angular-cataboi';

  ngOnInit() {

  }
}
