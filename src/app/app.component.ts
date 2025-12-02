import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TVK-Assignment-Demo';


  
}
