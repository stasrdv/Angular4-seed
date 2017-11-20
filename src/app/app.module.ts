import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routing } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { MdDialogModule } from "@angular/material";

import { SpinnerModule } from "./modules/spinner/spinner.module";
import { ModalsModule } from "./modals/modals.module";
import { GlobalObjectsModule } from "./shared/global-objects/global-objects.module";
import { ManagersModule } from "./shared/managers/managers.module";
import { HttpInterceptorsModule } from "./config/http-interceptors/http-interceptors.module";

import { NavbarComponent } from "./components/navbar/navbar.component"; /* demo */
import { AppComponent } from "./app.component";

import { GeneralService } from "./shared/services/general.service"; /* demo */
import { AuthService } from "./views/login/shared/services/auth.service"; /* demo */

import { AuthGuard } from "./config/route-guards/auth-guard.service"; /* demo */

import { ErrorsManager } from "./shared/managers/errors-manager";
import { ErrorHandler } from "@angular/core";

const AppProvidersModules = [
    GlobalObjectsModule,
    ManagersModule,
    HttpInterceptorsModule
];

const AppModules = [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ModalsModule,
    routing,
    MdDialogModule,
    FormsModule,
    SpinnerModule
];

const AppDeclarations = [
    AppComponent,
    NavbarComponent /* demo */
];

const appServices = [
    GeneralService, /* demo */
    AuthGuard, /* demo */
    AuthService /* demo */
];

@NgModule({
    imports: [
        AppModules,
        AppProvidersModules
    ],
    declarations: [
        AppDeclarations
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        appServices,
        {provide: ErrorHandler, useClass: ErrorsManager}
    ]
})

export class AppModule { }