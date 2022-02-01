// import Greet from './components/GreetFunc';
// import Welcome from './components/GreetClass';
// import Hello from './components/Hello';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <Message />

      {/* <Greet name='Bruce' hero='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark' hero='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' hero='Wonder Woman'/> */}

      {/* <Welcome name='Bruce' hero='Batman'/>
      <Welcome name='Clark' hero='Superman'/>
      <Welcome name='Diana' hero='Wonder Woman'/> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
