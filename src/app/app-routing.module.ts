import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JurosCompostoComponent } from './pages/juros-composto/juros-composto.component';
import { JurosSimplesComponent } from './pages/juros-simples/juros-simples.component';
import { TesouroSelicComponent } from './pages/tesouro-selic/tesouro-selic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'juros-simples', component: JurosSimplesComponent },
  { path: 'tesouro-selic', component: TesouroSelicComponent },
  { path: 'juros-composto', component: JurosCompostoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
