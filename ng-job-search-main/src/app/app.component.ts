import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobsComponent,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
