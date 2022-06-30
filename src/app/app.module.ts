import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LifeComponent } from './pages/life/life.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { InvolvementComponent } from './components/school/involvement/involvement.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoursesComponent } from './components/school/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LifeComponent,
    WorkComponent,
    WorkExperienceComponent,
    ContactComponent,
    InvolvementComponent,
    AboutMeComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
