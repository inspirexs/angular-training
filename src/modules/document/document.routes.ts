import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DocumentComponent } from './document.component';


export const documentRoutes: Routes = [
  { path: '', component: DocumentComponent, canActivate: [AuthGuard] }
];
