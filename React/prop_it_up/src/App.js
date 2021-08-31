import PersonCard from "./components/PersonCard"
import './App.css';

function App() {
  return (
    <div>
      <PersonCard name="Doe, Jane" age={ 45 } hair="Black" />
      <PersonCard name="Smith, John" age={ 88 } hair="Brown" />
      <PersonCard name="Fillmore, Millard" age={ 50 } hair="Brown" />
      <PersonCard name="Smith, Maria" age={ 62 } hair="Brown" />
    </div>
  );
}

export default App;
