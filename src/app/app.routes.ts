import { Routes } from '@angular/router';
import { AngularPage } from './angular-page/angular-page';
import { ReactPage } from './react-page/react-page';
import { VuePage } from './vue-page/vue-page';

export const routes: Routes = [

  { path: 'react', component: ReactPage },
  { path: 'vue', component: VuePage },
    { path: '', component: AngularPage, pathMatch: 'full'  },
];
