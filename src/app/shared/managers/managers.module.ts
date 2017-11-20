/**
 * Import here only global managers!
 * 
 * consider to import it only in the modules who use it
 */

import { NgModule } from "@angular/core";

import { AngularCoreObjectsGenerator } from "./angular-core-objects-generator";
import { BlobManager } from "./blob-manager";
import { BrowsersManager } from "./browser-manager";
import { windowRef } from "./window-manager";
import { ModalManager } from "./modal-manager";
import { GlobalErrorsActions } from "./global-errors-action";

@NgModule({
    providers: [
        AngularCoreObjectsGenerator,
        BlobManager,
        BrowsersManager,
        windowRef,
        ModalManager,
        GlobalErrorsActions
    ]
})
export class ManagersModule { }