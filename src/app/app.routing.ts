import { Routes, RouterModule } from '@angular/router';
import { AccessGaurdService } from 'src/app/AccessGaurd.service';
import { AdminGaurdService } from 'src/app/AdminGaurd.service';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SummaryComponent } from 'src/app/summary/summary.component';

const routes: Routes = [

    {
      path : 'login' ,
      component : LoginComponent,

    },
    {
      path : 'home' ,
      loadChildren :()=>import('./home/home.module').then(m=>m.HomeModule) ,
      canActivate:[AccessGaurdService]

    },
    {
      path : 'summary' ,
      component:SummaryComponent,
      canActivate:[AccessGaurdService , AdminGaurdService ]

    },
    {
      path : '' ,
      pathMatch:'full',
      redirectTo:'login'  
      },
    {
      path : '**' ,
     redirectTo:'login'
    },

];

export const AppRoutes = RouterModule.forRoot(routes);
