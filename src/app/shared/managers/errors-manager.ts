/**
 * Use this file only for Error management
 */

import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { ModalManager } from "./modal-manager";
import { ModalDataModel } from "../../modals/shared/models/modalData.model";
import { GlobalErrorsActions } from "./global-errors-action";

@Injectable()
export class ErrorsManager implements ErrorHandler {

    constructor(
        private injector: Injector, // the injector is needed because the ErrorHandler is created before the DI system
    ) { }

    handleError(error: any) {
        this.actionByErrorCode(error);
        this.errorMessageHandler(error);
    }

    /**
     * Take an action by the error given
     * @param error
     */
    actionByErrorCode(error: any) {
        let globalErrorsActions: GlobalErrorsActions = this.injector.get(GlobalErrorsActions);
        globalErrorsActions.handleError(error);
    }


    /**
     *  Handle the error messages and print them
     * @param error 
     */
    errorMessageHandler(error: any) {
        let errorMsg = this.errorMessageGenerator(error);
        console.error(errorMsg);
    }

    /**
     * Generate error messages by the error given
     * @param error
     */
    errorMessageGenerator(error: any) {
        let errorMsg: string;

        // application errors 
        if (error.ngDebugContext) {
            errorMsg = `Error has occurred in ${error.ngDebugContext.component.constructor.name} or in one of his dependencies \n` +
                `messege: ${error.message} \n` +
                `stack: ${error.stack}`;
        }
        // network errors 
        else if (error instanceof HttpErrorResponse) {
            errorMsg = `Network error has occurred \n` +
                `messege: ${error.message} \n` +
                `status: ${error.status} \n` +
                `url: ${error.url}`;
        }
        // general errors 
        else {
            errorMsg = `Unhandled error has occurred \n` +
                `messege: ${error.message} \n`;
        }

        return errorMsg;
    }
}