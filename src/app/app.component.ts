import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {MatFabAnchor} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatToolbar, RouterOutlet, MatIconModule, RouterLink, MatFabAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular-material';
}
