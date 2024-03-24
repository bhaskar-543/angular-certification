import { Component, OnInit } from '@angular/core';
import { JobSearchService } from '../job-search.service';
import { Job } from '../_models/job.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {

  favoriteJobs$:Job[] =[];
  constructor(private jobSearchService: JobSearchService){}

  public ngOnInit(): void {
    this.jobSearchService.favorites$.subscribe((fav_jobs:Job[])=>{
      this.favoriteJobs$ = fav_jobs;
    })
  }
}
