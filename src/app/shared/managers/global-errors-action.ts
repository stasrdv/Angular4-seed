import { Injectable, NgZone } from "@angular/core";
import { ModalDataModel } from "../../modals/shared/models/modalData.model";
import { ModalManager } from "./modal-manager";
import { ErrorsCodesEnum } from "../enums/errors-codes.enum";
import { GeneralErrorModalComponent } from "../../modals/general-error/general-error.component";

@Injectable()
export class GlobalErrorsActions {

    constructor(
        private modalManager: ModalManager,
        private ngZone: NgZone // ngZone allows you to reenter Angular zone from a task that was executed outside of the Angular zone
    ) { }

    handleError(error: any) {
        let componentData: ModalDataModel;
        error.code = 1;
        switch (ErrorsCodesEnum[error.code]) {
            case 'default':
                componentData = new ModalDataModel(
                    GeneralErrorModalComponent,
                    {
                        data: {
                            header: `~ General Error ~`,
                            body: 'This is the Error body'
                        },
                        width: '30%',
                        height: '50%'
                    }
                );
                break;
        }
        if (componentData) {
            // creates a function to run through angular's zone
            let action = () => {
                this.modalManager.open(componentData);
            }

            this.runThroughNgZone(action); 
        }
    }

    /**
     * Execute the function through the ngZone
     * @param action the function to run
     */
    runThroughNgZone(action: any) {
        try {
            this.ngZone.run(() => {
                action();
            });
        }
        catch (e) {
            throw new Error(e);
        }
    }
}