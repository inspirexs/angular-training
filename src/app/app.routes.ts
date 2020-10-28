import { Routes } from '@angular/router';
import { DocumentComponent } from 'src/modules/document/document.component';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, children:[
    { path: 'subroute1', component: Subroute1Component },
    { path: 'subroute2', component: Subroute2Component },
  ] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
