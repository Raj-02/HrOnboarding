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





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
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
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
