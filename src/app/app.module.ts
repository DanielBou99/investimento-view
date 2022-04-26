import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { JurosSimplesComponent } from './pages/juros-simples/juros-simples.component';
import { HomeComponent } from './pages/home/home.component';
import { TesouroSelicComponent } from './pages/tesouro-selic/tesouro-selic.component';
import { JurosCompostoComponent } from './pages/juros-composto/juros-composto.component';
import { FormsModule } from '@angular/forms';
import { ResultadoInvestimentoComponent } from './shared/resultado-investimento/resultado-investimento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JurosSimplesComponent,
    HomeComponent,
    TesouroSelicComponent,
    JurosCompostoComponent,
    ResultadoInvestimentoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
