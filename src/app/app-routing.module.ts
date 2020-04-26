import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrackerComponent} from './tracker/tracker.component';
import {HelpComponent} from './help/help.component';
import {StatsComponent} from './stats/stats.component';


const routes: Routes = [
  { path: 'tracker', component: TrackerComponent },
  { path: 'help', component: HelpComponent },
  { path: 'stats', component: StatsComponent },
  { path: '',   redirectTo: 'tracker', pathMatch: 'full'},
  { path: '**', redirectTo: 'tracker', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
