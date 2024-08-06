import { Routes } from '@angular/router';
import { AuthGuard } from './auth_service/auth.guard';
import { AdminGuard } from './auth_service/admin.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) ,canActivate: [AuthGuard, AdminGuard]  },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) ,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
