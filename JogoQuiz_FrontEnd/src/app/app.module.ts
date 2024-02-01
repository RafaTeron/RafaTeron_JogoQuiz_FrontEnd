// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginTopoComponent } from './Login/login-topo/topo.component';
import { CommonModule } from '@angular/common';
import { LoginPainelComponent } from './Login/login-painel/painel.component';
import { LoginFooterComponent } from './Login/login-footer/footer.component';
import { LoginRootComponent } from './Login/login-root/login-root.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizFooterComponent } from './Quiz/quiz-footer/quiz-footer.component';
import { QuizPainelComponent } from './Quiz/quiz-painel/quiz-painel.component';
import { QuizTopoComponent } from './Quiz/quiz-topo/quiz-topo.component';
import { QuizRootComponent } from './Quiz/quiz-root/quiz-root.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginTopoComponent,
    LoginPainelComponent,
    LoginFooterComponent,
    LoginRootComponent,
    QuizFooterComponent,
    QuizPainelComponent,
    QuizTopoComponent,
    QuizRootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
