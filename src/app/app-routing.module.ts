import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from'./login/login.component';
import{SignUpComponent} from'./signup/signup.component';
import{AppointmentComponent}from './appointment/appointment.component';
import{HomeComponent} from'./home/home.component';
import { PatientComponent } from './patient/patient.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Appointment',component:AppointmentComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'Login',component:LoginComponent},
  {path:'patient',component:PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
