import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FirstStepComponent } from '../components/first-step/first-step.component';
import { HomeTutionComponent } from '../components/home-tution/home-tution.component';
import { AdmissionsComponent } from '../components/nav-components/admissions/admissions.component';
import { ClassesComponent } from '../components/nav-components/classes/classes.component';
import { ContactupComponent } from '../components/nav-components/contactup/contactup.component';
import { WhyusComponent } from '../components/nav-components/whyus/whyus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FirstStepComponent,
    HomeTutionComponent,
    AdmissionsComponent,
    ClassesComponent,
    ContactupComponent,
    WhyusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
