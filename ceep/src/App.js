import logo from "./logo.svg";
import "./App.css";
import { NoteList } from "./components/noteList/noteList";
import { RegistrationForm } from "./components/registrationForm";

function App() {
  return (
    <section>
      <RegistrationForm></RegistrationForm>
      <NoteList></NoteList>
    </section>
  );
}

export default App;
