import { AdminComponent } from './../../Modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { DashboardComponent } from '../../Modules/dashboard/dashboard.component';
import { UsefulLinksComponent } from '../../Modules/useful-links/useful-links.component';
import { TechnicalSupportComponent } from '../../Modules/technical-support/technical-support.component';
import { ContactsComponent } from '../../Modules/contacts/contacts.component';
import { UserInformationComponent } from '../../Modules/user-information/user-information.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UsefulLinksComponent,
    TechnicalSupportComponent,
    ContactsComponent,
    UserInformationComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatChipsModule,
    MatSlideToggleModule,
    BrowserModule,
    MatIconModule
  ]
})
export class DefaultModule { }
