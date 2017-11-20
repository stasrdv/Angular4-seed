/**
 * Import here only modal components
 */

import { NgModule } from "@angular/core";
import { MdDialogModule } from "@angular/material";

import { NoMoneyModalComponent } from "./no-money/no-money.component"; /* demo */
import { GeneralErrorModalComponent } from "./general-error/general-error.component";

@NgModule({
    imports: [
        MdDialogModule
    ],
    declarations: [
        NoMoneyModalComponent, /* demo */
        GeneralErrorModalComponent
    ],
    exports: [
        NoMoneyModalComponent, /* demo */
        GeneralErrorModalComponent
    ],
    entryComponents:[
        NoMoneyModalComponent, /* demo */
        GeneralErrorModalComponent
    ]
})
export class ModalsModule{}