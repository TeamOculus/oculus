import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DevelopersComponent } from './developers/developers.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperiencesGearVrComponent } from './experiences/experiences-gear-vr/experiences-gear-vr.component';
import { GearVrComponent } from './gear-vr/gear-vr.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './login/create-account/create-account.component';
import { RiftComponent } from './rift/rift.component';
import { RiftReadyComponent } from './rift/rift-ready/rift-ready.component';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent},
    { path: 'developers', component: DevelopersComponent },
    { path: 'experiences/rift', component: ExperiencesComponent },
    { path: 'experiences/gear-vr', component: ExperiencesGearVrComponent },
    { path: 'gear-vr', component: GearVrComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'rift', component: RiftComponent },
    { path: 'rift/ready', component: RiftReadyComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);