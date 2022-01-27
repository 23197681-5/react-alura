import logo from "./logo.svg";
import "./App.css";
import NoteList from "./components/noteList/index";
import RegistrationForm from "./components/registrationform/index";
import { Component } from "react";

class App extends Component {
  createNote(title, text) {}
  render() {
    return (
      <section>
        <RegistrationForm createNote={this.createNote}></RegistrationForm>
        <NoteList></NoteList>
      </section>
    );
  }
}

export default App;
