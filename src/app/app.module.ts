import { JwtService } from './jwt.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Menu1Component } from './views/menu1/menu1.component';
import { Menu2Component } from './views/menu2/menu2.component';
import { LoginComponent } from './login/login.component';

import { ListuserComponent } from './views/listuser/listuser.component';
import { AdduserComponent } from './views/adduser/adduser.component';
import { ModuserComponent } from './views/moduser/moduser.component';
import { DroitaccesComponent } from './views/droitacces/droitacces.component';
import { GerergroupComponent } from './views/gerergroup/gerergroup.component';
import { NouvgroupComponent } from './views/nouvgroup/nouvgroup.component';
import { GererapplComponent } from './views/gererappl/gererappl.component';
import { GererhorComponent } from './views/gererhor/gererhor.component';
import { GenerationComponent } from './views/generation/generation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListTpeComponent } from './list-tpe/list-tpe.component';
import { GererbanqueComponent } from './views/gererbanque/gererbanque.component';
import { GenerermdpComponent } from './views/generermdp/generermdp.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    ModalModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    Menu1Component,
    Menu2Component,
    LoginComponent,
    ListuserComponent,
    AdduserComponent,
    ModuserComponent,
    DroitaccesComponent,
    GerergroupComponent,
    NouvgroupComponent,
    GererapplComponent,
    GererhorComponent,
    GenerationComponent,
    ListTpeComponent,
    GererbanqueComponent,
    GenerermdpComponent,
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy 
   },
   JwtService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
