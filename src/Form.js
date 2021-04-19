import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.elements["name"].value;
        this.props.addPerson(name);

    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input id="name" type="text" placeholder="Name..." />

                <button>SUBMIT</button>
            </form>
        );
    }
}

export default Form;