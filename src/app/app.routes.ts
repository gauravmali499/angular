import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:"home",
        title:"Home",
        loadChildren: ()=> import("./modules/home/home.module").then((m)=>m.HomeModule)
    },
    {
        path:"user",
        title:"User",
        loadChildren: ()=> import("./modules/user/user.module").then((m)=>m.UserModule)
    },
    {
        path:"admin",
        title:"Admin",
        canActivate:[authGuard],
        loadChildren: ()=> import("./modules/admin/admin.module").then((m)=> m.AdminModule)
    }
];
