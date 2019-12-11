import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];
// Import routing module
import { AppRoutingModule } from './app.routing';
import {AppHeaderModule} from '../../projects/coreui/angular/src/lib/header';
import {AppSidebarModule} from '../../projects/coreui/angular/src/lib/sidebar';
import {AppBreadcrumbModule} from '../../projects/coreui/angular/src/lib/breadcrumb';
import {AppAsideModule} from '../../projects/coreui/angular/src/lib/aside';
import {AppFooterModule} from '../../projects/coreui/angular/src/lib/footer';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBreadcrumbModule.forRoot(),
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    AppHeaderModule,
    AppSidebarModule,
    AppBreadcrumbModule,
    AppAsideModule,
    AppFooterModule,

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
