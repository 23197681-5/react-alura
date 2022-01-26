import logo from "./logo.svg";
import "./App.css";
import NoteList from "./components/noteList/index";
import RegistrationForm from "./components/registrationform/index";

function App() {
  return (
    <section>
      <RegistrationForm></RegistrationForm>
      <NoteList></NoteList>
    </section>
  );
}

export default App;
