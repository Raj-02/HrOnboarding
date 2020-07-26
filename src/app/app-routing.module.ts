import { AdminComponent } from './Modules/admin/admin.component';
import { UserInformationComponent } from './Modules/user-information/user-information.component';
import { UsefulLinksComponent } from './Modules/useful-links/useful-links.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { TechnicalSupportComponent } from './Modules/technical-support/technical-support.component';
import { ContactsComponent } from './Modules/contacts/contacts.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'Technical-Support',
    component: TechnicalSupportComponent,
  }, {
    path: 'Useful-Links',
    component: UsefulLinksComponent,
  }, {
    path: 'User-Information',
    component: UserInformationComponent,
  }, {
    path: 'Contacts',
    component: ContactsComponent,
  },  {
    path: 'Admin',
    component: AdminComponent,
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
