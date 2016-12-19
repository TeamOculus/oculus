import { RiftComponent } from './rift/rift.component';
import { RiftReadyComponent } from './rift/rift-ready/rift-ready.component';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rift', component: RiftComponent },
    { path: 'rift/ready', component: RiftReadyComponent },
]

export const routing = RouterModule.forRoot(APP_ROUTES);