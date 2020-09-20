import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockJsonOutputsComponent } from './mock-json-outputs/mock-json-outputs.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  {path: 'home', component: MockJsonOutputsComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: '', redirectTo: 'create-user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
