
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { CreateComponent } from './create/create.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
//import { AddtopicComponent } from './addtopic/addtopic.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/login'},
  { path: 'dashboard',component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout',redirectTo:'login'},
  { path: 'poll/:id', component: TopicdetailComponent },
  //{ path: 'create', component: CreateComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
