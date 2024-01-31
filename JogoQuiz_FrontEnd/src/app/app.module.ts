// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginTopoComponent } from './Login/login-topo/topo.component';
import { CommonModule } from '@angular/common';
import { LoginPainelComponent } from './Login/login-painel/painel.component';
import { LoginFooterComponent } from './Login/login-footer/footer.component';
import { LoginRootComponent } from './Login/login-root/login-root.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginTopoComponent,
    LoginPainelComponent,
    LoginFooterComponent,
    LoginRootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
