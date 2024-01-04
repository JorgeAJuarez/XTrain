import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyTrainComponent } from './daily-train/daily-train.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './landing/hero/hero.component';
import { FeaturesComponent } from './landing/features/features.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { AdminTrainScreenComponent } from './admin-train-screen/admin-train-screen.component';
import { AdminTechnicScreenComponent } from './admin-technic-screen/admin-technic-screen.component';
import { AdminAlumnScreenComponent } from './admin-alumn-screen/admin-alumn-screen.component';
import { AdminEventScreenComponent } from './admin-event-screen/admin-event-screen.component';
import { AdminNoticeScreenComponent } from './admin-notice-screen/admin-notice-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AdminTeacherScreenComponent } from './admin-teacher-screen/admin-teacher-screen.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AlumnoDialogComponent } from './admin-alumn-screen/alumno-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { TechnicDialogComponent } from './admin-technic-screen/technic-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    DailyTrainComponent,
    EvaluationsComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    AdminTrainScreenComponent,
    AdminTechnicScreenComponent,
    AdminAlumnScreenComponent,
    AdminEventScreenComponent,
    AdminNoticeScreenComponent,
    LoginScreenComponent,
    AdminTeacherScreenComponent,
    AlumnoDialogComponent,
    TechnicDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatCardModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
