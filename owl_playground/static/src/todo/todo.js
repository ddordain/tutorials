/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.todo";


    setup() {
    this.todo = {id: 3, description: "buy milk", done: false};
    }
}