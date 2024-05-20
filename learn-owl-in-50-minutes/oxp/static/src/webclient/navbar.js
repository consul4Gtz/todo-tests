/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useTodoStore } from "../todoo/todo_store";

// es la extension de la clase component 
export class Navbar extends Component {
  static template = "oxp.Navbar";
  //para conocer los props que definen la api del componente 
  //tambien para saber de que va un componente , la referencia es ver su propiedades 
  static props = {

    currentApp: String,
    apps: Array,
    selectApp: Function,
  };

  setup() {
    this.todoStore = useTodoStore();
  }
}
