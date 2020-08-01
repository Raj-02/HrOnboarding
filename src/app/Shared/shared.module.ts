import { OnboardingService } from './onboarding.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatTableModule } from '@angular/material/table';
import { PreArrivalComponent } from './Tables/pre-arrival/pre-arrival.component';
import { Day1Component } from './Tables/day1/day1.component';
import { Week1Component } from './Tables/week1/week1.component';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PreArrivalComponent,
    Day1Component,
    Week1Component
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FlexLayoutModule,
    RouterModule,
    MatChipsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PreArrivalComponent,
    Week1Component,
    Day1Component
  ],
  providers: [
    OnboardingService
  ]
})
export class SharedModule { }
