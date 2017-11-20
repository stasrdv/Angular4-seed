import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./config/route-guards/auth-guard.service"; /* demo */


const appRoutes: Routes = [ /* demo */
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        loadChildren: 'app/views/home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: 'app/views/login/login.module#LoginModule'
    },
    {
        path: 'weapon-store',
        loadChildren: 'app/views/weapon-store/weapon-store.module#WeaponStoreModule',
        canActivate: [AuthGuard]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);