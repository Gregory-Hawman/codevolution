import Greet from './components/GreetFunc'
import Welcome from './components/GreetClass'
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
