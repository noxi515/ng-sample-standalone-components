import { Routes } from '@angular/router';
import { RootPageComponent } from './root-page/root-page.component';

export const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
  },
  {
    path: 'first',
    loadComponent: () => import('./first-page/first-page.component').then(x => x.FirstPageComponent),
  },
  {
    path: 'second',
    loadComponent: () => import('./second-page/second-page.component').then(x => x.SecondPageComponent),
  },
];
