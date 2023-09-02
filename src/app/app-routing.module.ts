import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ArticlesComponent } from './Components/articles/articles.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'userLogin', component: LoginComponent, canActivate: [loginGuard]},
  {path: '', redirectTo:'/userLogin', pathMatch:'full'},
  {path: 'createArticle', component: ArticlesComponent, canActivate: [loginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
