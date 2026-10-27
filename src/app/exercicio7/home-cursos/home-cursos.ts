import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-cursos',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home-cursos.html',
  styleUrls: ['./home-cursos.css']
})
export class HomeCursosComponent { }