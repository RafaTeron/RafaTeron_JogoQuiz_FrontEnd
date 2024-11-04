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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './shared/Pipes/order-by.pipe';
import { FinishFolderComponent } from './component/Finish/finish-folder/finish-folder.component';
import { FinishPainelComponent } from './component/Finish/finish-painel/finish-painel.component';
import { FinishRootComponent } from './component/Finish/finish-root/finish-root.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeTopComponent } from './component/Home/home-top/home-top.component';
import { HomePainelComponent } from './component/Home/home-painel/home-painel.component';
import { HomeRootComponent } from './component/Home/home-root/home-root.component';
import { RegisterPainelComponent } from './component/Register/register-painel/register-painel.component';
import { RegisterRootComponent } from './component/Register/register-root/register-root.component';
import { RegisterTopComponent } from './component/Register/register-top/register-top.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeTopComponent,
    HomePainelComponent,
    HomeRootComponent,
    RegisterPainelComponent,
    RegisterRootComponent,
    RegisterTopComponent,
    LoginTopoComponent,
    LoginPainelComponent,
    LoginFooterComponent,
    LoginRootComponent,
    QuizFooterComponent,
    QuizPainelComponent,
    QuizTopoComponent,
    QuizRootComponent,
    FinishFolderComponent,
    FinishPainelComponent,
    FinishRootComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
