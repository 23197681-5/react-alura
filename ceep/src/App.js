import logo from './logo.svg';
import './App.css';
import { NoteList } from './components/noteList';

function App() {
  return (
    <section>
  <input type="text" placeholder='Annotation title'></input>
  <textarea>Annotation text</textarea>
  <button>Create annotation</button>
  <NoteList></NoteList>
  </section>
  );
}

export default App;
