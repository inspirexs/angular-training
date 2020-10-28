import { Routes } from '@angular/router';
import { DocumentComponent } from 'src/modules/document/document.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: 'document', component: DocumentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
