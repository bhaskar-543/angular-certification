import { Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
    {
        path:'jobs/:jobid',component:JobDetailsComponent
    },
    {
        path:'favorites/:jobid',component:JobDetailsComponent
    },
    {
        path:'jobs',component:JobsComponent
    },
    {
        path:'favorites',component:FavoritesComponent
    },
    {
        path:'',redirectTo:'jobs',pathMatch:'full'
    }

];
