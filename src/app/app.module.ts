import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { ContentInnerComponent } from './components/content/content-inner/content-inner.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { AuthGuard } from './guards/auth.guard';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { TravellerResolver } from './resolvers/traveller.resolver';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ContentComponent,
    ContentInnerComponent,
    Subroute1Component,
    Subroute2Component,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [
    AuthGuard,

    TravellerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
