# Angular Boilerplate

This project provides a kick start for angular applications.
The project build on top of the angular-cli project.

## Getting Started

To get you started you can simply clone the repository and install the dependencies

### **Prerequisites**

You'll need [git](https://git-scm.com/) to [clone](https://bitbucket.org/eladmobile/angular-boilerplate) the repository or download the zip file.

You'll also need a number of Node.js tools to initialize and install. You must have Node.js and its package manager (npm) installed.

You can get them from [here](https://nodejs.org/en/).

### Install Dependencies

#### Dependencies:

1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4. 
2. We get the packages we depend upon via npm, the Node package manager.

#### Installation:

1. Install **Angular-cli** on your computer globally or as the project's parent project.
2. Open cmd under the project directory and run: `npm install`.

   ( if you see you do not need the whole packages, delete them from the package.json before, for decreasing application weight )


## Using the App

### **Development server**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### **Code scaffolding**

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### **Build**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### **clean:demo**

Run `npm run clean:demo` to delete all demo files and folders.

After you clean the demo make sure to delete the routing from app-routing.module + clean all imports ( include app.module ).

All the deleted code will mark with `/* demo */` or `<!-- demo -->`, so you can search for that flag for easy deleting.

### **Further help**

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 3rd Party Packages:

Package | Version | notes
------- | ------- | -----
@angular/material | 2.0.0-beta.11 | consider upgrading to a stable version
normalize.css | 7.0.0 
bootstrap | 3.3.7
jquery | 3.2.1
moment | 2.18.1
primeng | 4.2.1
rxjs | 5.4.2

If you would like to add more 3rd parties to the app, make sure you also declare them in the _**.angular-cli.json**_

## App files & concerns 


* package.json - app packages installed 
* src
    - app - root
        - components ( contains all module components )
        - config ( contains module configurations )
            - http-interceptors ( app wide interceptors )
            - route-guards
        - custom-polyfills - extra custom polyfills you can create and use 
        - modals - contains all the app modals
        - modules - contains all app modules(features), every module of this app should be there
        - shared ( contains services global objects etc.. )
            - enums
            - global-objects - app wide objets & helpers to use such as global variables, observables etc..
            - interfaces
            - managers - app wide managers such as error manger, modal manager etc..
            - models
            - services ( app wide services )
        - views ( contains the application views ( modules as main views\pages ))
    - assets - contains all the app images
    - environments - app state environment ( prod/dev )
    - snippets - snippets for vs code ( see snippets section )
    - index.html - html entry
    - styles.scss - global app styles 
    - .angular-cli.json ( angular-cli config ) - use it to import 3rd party styles and and packages

### **module structure**

* newModule - root
    - newModule.module.ts
    - newModule-routing.module.ts ( routing if needed )
    - newModule.component.ts ( root component )
    - newModule.component.html
    - newModule.component.scss/css
    - components ( module components ( exclude the root component ) ) 
    - config ( contains module configurations )
        - http-interceptors ( app wide interceptors )
        - route-guards 
        - etc ..
    - shared
        - models ( module model classes )
            - newModel.model.ts
        - services ( module http services )
            - newModule.service.ts
        - managers ( module managers & helpers )
            - newModule.manager.ts
        - etc..

## Snippets 

To add the user snippets, copy the snippet you would like to use,

go to VS-Code's folder -> User -> snippets and paste the snippet.

Use it...

\* If you would like to create or adjust your snippets, go to [VS-Code snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

## Have Fun -