import { Routes } from '@angular/router';
import { Area } from './pages/area/area';
import { NewColab } from './pages/area/components/colabs/new-colab/new-colab';

export const routes: Routes = [
  {
    path: 'app',
    component: Area,
    children: [
      { path: 'colabs/new', component: NewColab }
    ]
  }
];
