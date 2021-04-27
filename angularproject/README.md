# Angularproject - Employee Management System  [ UI ]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

        command - npm install -g @angular/cli@6.2.9
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Amexio installation

For Building the UI Components , in this application Amexio is used.

   * Step 1 :      How to install ? 

        Command - npm install amexio-ng-extensions@latest --save

   Note -  Please make sure you have the latest version of NodeJS & npm Angular CLI installed.

NodeJs installation steps-  https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/
                           


   * Step 2 : In app.module.ts import below library

        import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library
          
            imports: [ 
                AmexioWidgetModule
            ]

    * Step 3 : Inside the angular.json file add inside styles key.

        node_modules/amexio-ng-extensions/styles/css/at-md-blue.css

---
## About Application

---

This applications is for managing the employee information.
It consists following features : 

1. Adding new employee.
2. Delete Employee . 
3. Update Employee.
4. View particular employee Information.

Login , SignUp is for Admin user .

After successful signup the particular admin user will be able for login the application.

When login done successfully , the admin will have the employee list and token .

That whole information is stored in local storage for further operations.

After Login , the particular admin will be able to see the employees list which is added by him/her .

The admin has authority to add , delete , update the particular employee.


