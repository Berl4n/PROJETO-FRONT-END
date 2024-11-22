import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PesquisaComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    HttpClientModule // Importando o módulo HTTP
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
