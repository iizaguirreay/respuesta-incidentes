import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionViewComponent } from './components/family-view/action-view/action-view.component';
import { FamilyViewComponent } from './components/family-view/family-view.component';


const routes: Routes = [
  { path: '', component: FamilyViewComponent },
  { path: 'actions', component: ActionViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
