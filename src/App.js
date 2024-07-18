import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('e')
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello word</p>
      </header>
    </div>
  );
}

export default App;
