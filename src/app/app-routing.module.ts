import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LifeComponent } from './pages/life/life.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'life', component: LifeComponent},
  { path: 'work', component: WorkComponent},
  { path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
