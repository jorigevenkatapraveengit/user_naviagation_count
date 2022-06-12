import { HomeComponent } from 'src/app/home/home.component';
import { TabComponent } from './tab/tab.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: [
      {
        path: 'tab1',
        component: TabComponent,
      },
      {
        path: 'tab2',
        component: TabComponent,
      },
      {
        path: 'tab3',
        component: TabComponent,
      }
    ]
  }
];

export const HomeRoutes = RouterModule.forChild(routes);
