/** @odoo-module **/

import { Component, useState, useSubEnv } from "@odoo/owl";
import { Navbar } from "./navbar";
import { Todoo } from "../todoo/todoo";
import { Dashboard } from "../dashboard/dashboard";
import { Contacts } from "../contacts/contacts";
import { TodoStore } from "../todoo/todo_store";

//Un componente web puede tener muchos componetes hijos 
//

export class WebClient extends Component {
  static template = "oxp.WebClient";
  //la linea siguiente es queivalente a ña linea 14 
  //static components = { Navbar: Navbar };
  //la cadena navvar es el nombre del componente que se va a usar en el template
  // a esta etiqueta se le puede pasar parametros
  static components = { Navbar };
  // los hooks soy muy utilixs para las asignaciones
  //de preferencia hay que suar los mismo nombres aunque los tipos de datos sean distintos 
  //ejemoplo navvar cscc , .js, .xml, Las buenas practicas dicen que se debe usar el mismo nombre

  setup() {
    //las aplicaciones que se van a mostrar en el cliente web
    this.apps = [
      { id: "todoo", name: "Todoo", Component: Todoo },
      { id: "dashboard", name: "Dashboard", Component: Dashboard },
      { id: "contacts", name: "Contacts", Component: Contacts },
    ];
    //el estado actual de la aplicacion
    this.state = useState({
      currentApp: this.apps[0],
    });

    //crear una instancia de la tienda de tareas
  
    const todoStore = useState(new TodoStore());

    // add store to environment
    useSubEnv({ todoStore });
  }

  //recibe un id con el qiue se selecciona la aplicacion
  selectApp(appId) {
    const newApp = this.apps.find((app) => app.id === appId);
    this.state.currentApp = newApp;
  }
}
