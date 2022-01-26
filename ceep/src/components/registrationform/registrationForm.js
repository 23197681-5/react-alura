import React, { Component } from "react";
export class RegistrationForm extends Component {
  render() {
    return (
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center v-screen">
        <input
          type="text"
          className="block text-gray-700 text-sm font-bold mb-2"
          placeholder="Annotation title"
        ></input>
        <textarea rows={3} placeholder="Annotation text"></textarea>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create annotation
        </button>
      </form>
    );
  }
}
