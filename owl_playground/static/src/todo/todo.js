/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.todo";
    
    static props = {
      id: Number,
      description: String, 
      done: Boolean,
    };

    setup() {
    this.todo = {id: 3, description: "buy milk", done: false};
    }
}
