import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CmsHomeComponent } from './pages/cms/cms-home/cms-home.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AuthComponent },
    { path: 'registre-se', component:  RegisterComponent},
    { path: 'cms', component: CmsHomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
];
