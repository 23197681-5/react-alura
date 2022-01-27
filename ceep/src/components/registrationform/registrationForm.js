import React, { Component } from "react";
export class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center v-screen"
        onSubmit={this._createNote(Event).bind(this)}
      >
        <input
          type="text"
          className="block text-gray-700 text-sm font-bold mb-2"
          placeholder="Annotation title"
          onChange={this._hangleTitleChange(Event).bind(this)}
        ></input>
        <textarea
          rows={3}
          placeholder="Annotation text"
          onChange={this._hangleTextChange(Event).bind(this)}
        ></textarea>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create annotation
        </button>
      </form>
    );
  }
}
