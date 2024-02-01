import { RouterModule, Routes } from "@angular/router";
import { LoginRootComponent } from "./Login/login-root/login-root.component";
import { QuizRootComponent } from "./Quiz/quiz-root/quiz-root.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    {
      path: 'Quiz',
      component: QuizRootComponent,
    },
    {
      path: 'Login',
      component: LoginRootComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}