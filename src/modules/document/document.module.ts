import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DocsResultComponent } from './docs-result/docs-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { documentRoutes } from './document.routes';
import { AuthGuard } from 'src/app/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(documentRoutes)
  ],
  declarations: [
    DocumentComponent,
    DocsResultComponent
  ],
  providers: [
    AuthGuard
  ],
  exports: []
})
export class DocumentModule { }
