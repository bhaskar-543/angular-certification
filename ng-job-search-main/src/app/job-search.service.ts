import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './_models/job.model';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { JobDetails } from './_models/job-details.model';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  allJobs$ = new BehaviorSubject<Job[]>([]);
  favorites$ = new BehaviorSubject<Job[]>([]);
  constructor(private http: HttpClient) { 
    this.http.get<Job[]>('/jobs').subscribe((data:Job[])=>{
      this.allJobs$.next(data);
    })
  }

  getJobs$ = this.http.get<Job[]>('/jobs').pipe(
    shareReplay(1)
  );

  getAllJobs(){
    return this.http.get('/jobs');
  }

  public getJobDetailsWithId(id:number):Observable<JobDetails>{
    return this.http.get<JobDetails>('/jobs/'+id);
  }

}
