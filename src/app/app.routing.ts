import { GenerermdpComponent } from './views/generermdp/generermdp.component';
import { GererbanqueComponent } from './views/gererbanque/gererbanque.component';
import { GenerationComponent } from './views/generation/generation.component';
import { GerergroupComponent } from './views/gerergroup/gerergroup.component';
import { ModuserComponent } from './views/moduser/moduser.component';
import { AdduserComponent } from './views/adduser/adduser.component';
import { ListuserComponent } from './views/listuser/listuser.component';
import { Menu2Component } from './views/menu2/menu2.component';
import { Menu1Component } from './views/menu1/menu1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { LoginComponent } from './login/login.component';
import { DroitaccesComponent } from './views/droitacces/droitacces.component';
import { NouvgroupComponent } from './views/nouvgroup/nouvgroup.component';
import { GererapplComponent } from './views/gererappl/gererappl.component';
import { GererhorComponent } from './views/gererhor/gererhor.component';
import { ListTpeComponent } from './list-tpe/list-tpe.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,     
  },
  {
    path: 'home',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'Menu1',
        component : Menu1Component
      },
      {
        path: 'Menu2',
        component : Menu2Component
      },
      {
        path: 'listuser',
        component : ListuserComponent
      },
      {
        path: 'adduser',
        component : AdduserComponent
      },
      {
        path: 'moduser',
        component : ModuserComponent
      },
      {
        path: 'droitacces',
        component : DroitaccesComponent
      },
      {
        path: 'gerergroup',
        component : GerergroupComponent
      },
      {
        path: 'nouvgroup',
        component : NouvgroupComponent
      },
      {
        path: 'gererappl',
        component : GererapplComponent
      },
      {
        path: 'gererhor',
        component : GererhorComponent
      },
      {
        path: 'generation',
        component : GenerationComponent
      },
      {
        path: 'listTPE',
        component : ListTpeComponent
      },
      {
        path: 'gererB',
        component : GererbanqueComponent
      },
      {
        path: 'generermdp',
        component : GenerermdpComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
