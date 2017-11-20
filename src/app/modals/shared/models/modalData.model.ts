import { MdDialogConfig } from "@angular/material";

export class ModalDataModel {
    afterOpen: any;
    afterClose: any;
    componentType: any;
    config: MdDialogConfig

    constructor(_componentType: any, _config: MdDialogConfig, _afterOpen: any = null, _afterClose: any = null) {
        this.componentType = _componentType;
        this.config = _config;
        this.afterOpen = _afterOpen;
        this.afterClose = _afterClose;
    }
}