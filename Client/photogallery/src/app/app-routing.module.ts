import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosComponent } from './photos/photos.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent},
  { path: 'photos/:id', component: PhotoDetailsComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'updateuser', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
