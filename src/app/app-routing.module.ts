import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HrmComponent } from './hrm/hrm.component';
import { PmsComponent } from './pms/pms.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'hrm', component: HrmComponent
  },
  {
    path: 'pms', component: PmsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'privacy-and-policy', component: PrivacyAndPolicyComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
