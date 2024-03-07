// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginTopoComponent } from './component/Login/login-topo/topo.component';
import { CommonModule } from '@angular/common';
import { LoginPainelComponent } from './component/Login/login-painel/painel.component';
import { LoginFooterComponent } from './component/Login/login-footer/footer.component';
import { LoginRootComponent } from './component/Login/login-root/login-root.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizFooterComponent } from './component/Quiz/quiz-footer/quiz-footer.component';
import { QuizPainelComponent } from './component/Quiz/quiz-painel/quiz-painel.component';
import { QuizTopoComponent } from './component/Quiz/quiz-topo/quiz-topo.component';
import { QuizRootComponent } from './component/Quiz/quiz-root/quiz-root.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
    QuizRootComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
