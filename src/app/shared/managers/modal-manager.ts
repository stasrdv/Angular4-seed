/**
 * This file is responsible for modals management
 */

import { Injectable, Component, Compiler, Injector, NgModule, NgModuleRef, ComponentFactory } from "@angular/core";
import { ModalsModule } from "../../modals/modals.module";
import { MdDialog, MdDialogModule } from "@angular/material";

import { AngularCoreObjectsGenerator } from "./angular-core-objects-generator";

import { ModalDataModel } from "../../modals/shared/models/modalData.model";


@Injectable()
export class ModalManager {

    constructor(
        private angularCoreObjectsGenerator: AngularCoreObjectsGenerator,
        private dialog: MdDialog,
        private _compiler: Compiler,
        private _injector: Injector,
        private _moduleRef: NgModuleRef<any>
    ) { }

    /**
     * Raise a modal
     * @param modalData configuration, component name, etc...
     */
    open(modalData: ModalDataModel): void {
        if (!modalData) {
            throw new Error('No modal data provided!');
        }

        // register to open modal observable
        let afterOpenObservable;
        if (modalData.afterOpen) { // check if user want to register a custom callback
            afterOpenObservable = this.dialog.afterOpen.subscribe(data => {
                modalData.afterOpen(data);
            });
        }

        // open the modal and keep an instance
        let dialogRef = this.dialog.open(modalData.componentType, modalData.config);

        // register to close modal observable
        let afterClosedObservable = dialogRef.afterClosed().subscribe(() => {
            if (modalData.afterClose) { // check if user want to register a custom callback
                modalData.afterClose();
            }

            if (afterOpenObservable) { // check if user registered a custom callback to the modal open
                afterOpenObservable.unsubscribe();
            }
            afterClosedObservable.unsubscribe();
        });

        /* // compile the modals module with its components
        this._compiler.compileModuleAndAllComponentsAsync(ModalsModule)
            .then((factories) => {
                const cmpFactory = this.getComponentFactoryByName(factories, modalData.componentName);

                // register to open modal observable
                let afterOpenObservable;
                if (modalData.afterOpen) { // check if user want to register a custom callback
                    afterOpenObservable = this.dialog.afterOpen.subscribe(data => {
                        modalData.afterOpen(data);
                    });
                }

                // open the modal and keep an instance
                let dialogRef = this.dialog.open(cmpFactory.componentType, modalData.config);

                // register to close modal observable
                let afterClosedObservable = dialogRef.afterClosed().subscribe(() => {
                    if (modalData.afterClose) { // check if user want to register a custom callback
                        modalData.afterClose();
                    }

                    if (afterOpenObservable) { // check if user registered a custom callback to the modal open
                        afterOpenObservable.unsubscribe();
                    }
                    afterClosedObservable.unsubscribe();
                });
            }); */
    }

    /**
     * Retrive the component factory from the factories given by the component name
     * @param factories list of factories 
     * @param componentName name of the component to search
     */
    protected getComponentFactoryByName(factories, componentName): ComponentFactory<any> {
        const cmpFactory = factories.componentFactories.find((component: ComponentFactory<any>) => {
            return component.componentType.name == componentName;
        });
        return cmpFactory;
    }




}