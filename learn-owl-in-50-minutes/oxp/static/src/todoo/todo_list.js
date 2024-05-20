/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useAutofocus } from "../utils";
import { TodoItem } from "./todo_item";
import { useTodoStore } from "./todo_store";

export class TodoList extends Component {
  static template = "oxp.TodoList";
  //
  static components = { TodoItem };
  static props = { list: Object };

  //setup es un constructor  investigar sobre el metodo constructor setup.
  //no es usado en todas las clases , si en algunas subclases 
  setup() {
    this.store = useTodoStore();
    //use autofocus es una funcion que hace que al recargar la pagina el cursor se posicione en el input
    useAutofocus("input");
  }

  //el codigo anterior tambien puede ser 
  //setup() { this.todos =[
  // {id:1, description: "Learn OWL", isCompleted: false},
  // {id:2, description: "Learn JS", isCompleted: true},
  // {id:3, description: "Learn CSS", isCompleted: false},
  // {id:4, description: "Learn XML", isCompleted: false},
  //]

  addTodo(ev) {
    //si la tecla presionada es enter y el valor del input no esta vacio
    //entonces agregara un nuevo todo a la lista
    if (ev.keyCode === 13 && ev.target.value != "") {
      this.store.addTodo(this.props.list.id, ev.target.value);
      ev.target.value = "";
    }
  }
}
