import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockJsonOutputsComponent } from './mock-json-outputs/mock-json-outputs.component';


const routes: Routes = [
  { path: 'home', component: MockJsonOutputsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
