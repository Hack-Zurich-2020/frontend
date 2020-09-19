import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockJsonOutputsComponent } from './mock-json-outputs/mock-json-outputs.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  { path: 'home', component: MockJsonOutputsComponent },
  { path: 'create-user', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
