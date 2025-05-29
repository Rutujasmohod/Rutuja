import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ClassesComponent } from '../components/nav-components/classes/classes.component';
import { AdmissionsComponent } from '../components/nav-components/admissions/admissions.component';
import { WhyusComponent } from '../components/nav-components/whyus/whyus.component';
import { ContactupComponent } from '../components/nav-components/contactup/contactup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'classes', component: ClassesComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'whyus', component: WhyusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactupComponent },
  { path: 'home', component: HomeComponent }, 
  { path: '**', pathMatch:'full',  component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
