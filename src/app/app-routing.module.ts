import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminAlumnScreenComponent } from './admin-alumn-screen/admin-alumn-screen.component';
import { AdminTeacherScreenComponent } from './admin-teacher-screen/admin-teacher-screen.component';
import { AdminTechnicScreenComponent } from './admin-technic-screen/admin-technic-screen.component';
import { AdminTrainScreenComponent } from './admin-train-screen/admin-train-screen.component';
import { AdminEventScreenComponent } from './admin-event-screen/admin-event-screen.component';
import { AdminNoticeScreenComponent } from './admin-notice-screen/admin-notice-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { DailyTrainComponent } from './daily-train/daily-train.component';

const routes: Routes = [
  //routing to LandingComponent
  { path: '', component: LandingComponent },
  //routing to Admin ComponentScreens
  { path: 'admin/alumn', component: AdminAlumnScreenComponent },
  { path: 'admin/teacher', component: AdminTeacherScreenComponent },
  { path: 'admin/technic', component: AdminTechnicScreenComponent },
  { path: 'admin/train', component: AdminTrainScreenComponent },
  { path: 'admin/event', component: AdminEventScreenComponent },
  { path: 'admin/notice', component: AdminNoticeScreenComponent },
  // routing to dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'daily-train', component: DailyTrainComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
