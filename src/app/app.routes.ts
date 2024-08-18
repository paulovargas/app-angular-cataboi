import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnimaisComponent } from './pages/animais/animais.component';
import { PropriedadesComponent } from './pages/propriedades/propriedades.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { RebanhosComponent } from './pages/rebanhos/rebanhos.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'todos-animais',
            component: AnimaisComponent,
            outlet: 'main'
          },
          {
            path: 'todas-propriedades',
            component: PropriedadesComponent,
            outlet: 'main'
          },
          {
            path: 'todos-eventos',
            component: EventosComponent,
            outlet: 'main'
          },
          {
            path: 'todos-rebanhos',
            component: RebanhosComponent,
            outlet: 'main'
          }
        ]
       },
      //{ path: 'login', component:  },
    ]
  }
];
