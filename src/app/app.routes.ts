import { Routes } from '@angular/router';
import { Area } from './pages/area/area';
import { NewColab } from './pages/area/components/colabs/new-colab/new-colab';
import { AllCollabs } from './pages/area/components/colabs/all-collabs/all-collabs';

export const routes: Routes = [
  {
    path: 'app',
    component: Area,
    children: [
      { path: 'collabs/new', component: NewColab },
      { path: 'collabs', component: AllCollabs },
    ]
  }
];
