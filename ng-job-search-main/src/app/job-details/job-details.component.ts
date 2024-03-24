import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSearchService } from '../job-search.service';
import { JobDetails } from '../_models/job-details.model';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{

  jobID :number = 0;
  selectedJob !: JobDetails ;
  constructor(private route:ActivatedRoute, private jobSearchService:JobSearchService, private _location: Location) {}

  public ngOnInit(): void {
    this.route.params.subscribe((id)=>{
      this.jobID = id['jobid'];
    });
    
    this.jobSearchService.getJobDetailsWithId(this.jobID).subscribe((details : JobDetails)=>{
      this.selectedJob = details;
    })

  }

  public  onBackClicked():void {
    this._location.back();
  }
  

}
