import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./login-routing.module";

import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations:[
        LoginComponent
    ],
    exports:[
        LoginComponent
    ]
})
export class LoginModule{}