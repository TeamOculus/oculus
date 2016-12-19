import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { DevelopersComponent } from './developers/developers.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { GearVrComponent } from './gear-vr/gear-vr.component';
import { BlogComponent } from './blog/blog.component';
import { RiftComponent } from './rift/rift.component';
import { RiftReadyComponent } from './rift/rift-ready/rift-ready.component';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cart', component: CartComponent },
    { path: 'developers', component: DevelopersComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'gear-vr', component: GearVrComponent },
    { path: 'login', component: LoginComponent },
    { path: 'rift', component: RiftComponent },
    { path: 'rift/ready', component: RiftReadyComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);