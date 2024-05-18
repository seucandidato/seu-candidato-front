import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CmsHomeComponent } from './pages/cms/cms-home/cms-home.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { AuthService } from './pages/auth/auth.service';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: AuthComponent},
    {path: 'logout', redirectTo: '/login', resolve: { logout: AuthService }},
    {path: 'cms', component: CmsHomeComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundComponent}
];
