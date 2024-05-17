import { RouterModule, Routes } from "@angular/router";
import { LoginRootComponent } from "./component/Login/login-root/login-root.component";
import { QuizRootComponent } from "./component/Quiz/quiz-root/quiz-root.component";
import { NgModule } from "@angular/core";
import { FinishRootComponent } from "./component/Finish/finish-root/finish-root.component";

const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    {
      path: 'Quiz',
      component: QuizRootComponent,
    },
    {
      path: 'Login',
      component: LoginRootComponent,
    },
    {
      path: 'Finish',
      component: FinishRootComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
