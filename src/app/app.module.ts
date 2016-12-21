import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { RiftComponent } from './rift/rift.component';
import { RiftReadyComponent } from './rift/rift-ready/rift-ready.component';
import { BlogComponent } from './blog/blog.component';
import { GearVrComponent } from './gear-vr/gear-vr.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { DevelopersComponent } from './developers/developers.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ExperiencesGearVrComponent } from './experiences/experiences-gear-vr/experiences-gear-vr.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RiftComponent,
    RiftReadyComponent,
    BlogComponent,
    GearVrComponent,
    ExperiencesComponent,
    DevelopersComponent,
    CartComponent,
    LoginComponent,
    ExperiencesGearVrComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
