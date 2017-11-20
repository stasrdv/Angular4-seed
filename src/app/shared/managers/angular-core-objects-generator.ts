/**
 * This file is responsible only for angular core objects creation
 */

import { Injectable, NgModule, Component } from "@angular/core";

@Injectable()
export class AngularCoreObjectsGenerator {

    /**
     * Creates angular's NgModule
     * @param moduleObj the NgModule type object
     * @param classObj the class to use
     */
    createModule(moduleObj: NgModule, classObj: object = null): any {
        try {
            let module = NgModule({
                imports: moduleObj.imports ? moduleObj.imports : [],
                declarations: moduleObj.declarations ? moduleObj.declarations : [],
                entryComponents: moduleObj.entryComponents ? moduleObj.entryComponents : [],
                exports: moduleObj.exports ? moduleObj.exports : [],
                providers: moduleObj.providers ? moduleObj.providers : [],
                bootstrap: moduleObj.bootstrap ? moduleObj.bootstrap : []
            })(classObj ? classObj : class tmpModule {
                constructor() {}
            });
            return module;
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * Creates angular's component
     * @param componentObj the component type object
     * @param classObj the class to use
     */
    createComponent(componentObj: Component, classObj: object = null): any {
        try {
            let component = Component({
                selector: componentObj.selector ? componentObj.selector : null,
                template: componentObj.template ? componentObj.template : '<h1>No template provided</h1>',
                styleUrls: componentObj.styleUrls ? componentObj.styleUrls : null,
                providers: componentObj.providers ? componentObj.providers : null,
                host: componentObj.host ? componentObj.host : null,
                animations: componentObj.animations ? componentObj.animations : null
            })(classObj ? classObj : class tmpComponent {
                constructor() {}
            })
            return component;
        }
        catch (e) {
            console.error(e);
        }
    }
}