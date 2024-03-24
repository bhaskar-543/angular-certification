import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobSearchService } from '../job-search.service';
import { Subject, catchError, of } from 'rxjs';
import { Job } from '../_models/job.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit, OnDestroy {

  all_jobs$:Job[] =[];
  favorites$:Job[] = [];
  fav_dictionary:Record<number,boolean> = {
  }


  constructor(private jobSearchService:JobSearchService){ }

  ngOnInit(): void {
    this.jobSearchService.allJobs$.subscribe((jobs:Job[]) =>{
      this.all_jobs$ = jobs;
      for(let job of this.all_jobs$){
        this.fav_dictionary[job.id] = false;
      }
    })
    this.jobSearchService.favorites$.subscribe((favJobs:Job[]) =>{
      this.favorites$ = favJobs;
      for(let fav_job of this.favorites$){
        this.fav_dictionary[fav_job.id] = true;
      }
    })
  }

  public addToFavorite(jobId:number):void{
    if(this.fav_dictionary[jobId] === false){
      let job : Job = this.all_jobs$.find(job => job.id === jobId) as Job;
      this.favorites$.push(job);
    }else{
      this.favorites$= this.favorites$.filter(job => job.id !==jobId)
    }
    
    this.fav_dictionary[jobId]= !this.fav_dictionary[jobId];
  }

  error$ = new Subject<string>();
   
  ngOnDestroy(): void {
    this.jobSearchService.favorites$.next(this.favorites$);
    console.log('---destroyed---');
  }
}
