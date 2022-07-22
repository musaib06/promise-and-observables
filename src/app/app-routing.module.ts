import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEvent } from 'rxjs';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { ListComponent } from './observables/list/list.component';

import { ObservablesComponent } from './observables/observables.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'', redirectTo:'promise', pathMatch:'full'},
  {path:'promise' ,component:PromiseComponent},
  {path:'observables' ,component:ObservablesComponent,children:[
    {path:'',component:ListComponent },
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent}
]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
