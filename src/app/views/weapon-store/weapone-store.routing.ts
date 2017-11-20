import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WeaponStoreComponent } from "./weapon-store.component";

const routes: Routes = [
    { path: '', component: WeaponStoreComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);