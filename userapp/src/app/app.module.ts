import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { SelectModule } from 'ng-select';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FounderComponent } from './components/founder/founder.component';
import { ServicesComponent } from './components/services/services.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { PhpService } from './services/php.service';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CoordinatorsComponent } from './components/coordinators/coordinators.component';
import { YogaclassesComponent } from './components/yogaclasses/yogaclasses.component';
import { AdyComponent } from './components/ady/ady.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { OrdernowComponent } from './components/ordernow/ordernow.component';
import { HomeopathyComponent } from './components/homeopathy/homeopathy.component';
import { PoweryogaComponent } from './components/poweryoga/poweryoga.component';
import { AyurvedaComponent } from './components/ayurveda/ayurveda.component';
import { AstrologyComponent } from './components/astrology/astrology.component';
import { AcupressureComponent } from './components/acupressure/acupressure.component';
import { NaturopathyComponent } from './components/naturopathy/naturopathy.component';
import { PranichealingComponent } from './components/pranichealing/pranichealing.component';
import { SpaComponent } from './components/spa/spa.component';
import { FtrComponent } from './components/ftr/ftr.component';
import { RegisterComponent } from './components/register/register.component';


const appRoutes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'founder', component:FounderComponent},
  {path:'services', component:ServicesComponent},
  {path:'events', component:EventsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'testimonial', component:TestimonialComponent},
  {path:'coordinators', component:CoordinatorsComponent},
  {path:'yogaclasses', component:YogaclassesComponent},
  {path:'poweryoga', component:PoweryogaComponent},
  {path:'ayurveda', component:AyurvedaComponent},
  {path:'astrology', component:AstrologyComponent},
  {path:'acupressure', component:AcupressureComponent},
  {path:'naturopathy', component:NaturopathyComponent},
  {path:'ady', component:AdyComponent},
  {path:'coming',component:ComingsoonComponent},
  {path:'bookappointment',component:BookappointmentComponent},
  {path:'ordernow',component:OrdernowComponent},
  {path:'homeopathy',component:HomeopathyComponent},
  {path:'pranichealing',component:PranichealingComponent},
  {path:'spaservice',component:SpaComponent},
  {path:'ftr',component:FtrComponent},
  {path: 'register', component:RegisterComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component:HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FounderComponent,
    ServicesComponent,
    EventsComponent,
    GalleryComponent,
    TestimonialComponent,
    CoordinatorsComponent,
    YogaclassesComponent,
    AdyComponent,
    ComingsoonComponent,
    BookappointmentComponent,
    OrdernowComponent,
    HomeopathyComponent,
    PoweryogaComponent,
    AyurvedaComponent,
    AstrologyComponent,
    AcupressureComponent,
    NaturopathyComponent,
    PranichealingComponent,
    SpaComponent,
    FtrComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [PhpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule{} 