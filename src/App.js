import Dictionary from "./Dictionary";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container mt-3 text-center">
        <header className="App-header">
          <h1>D.I.C.T.I.O.N.A.R.Y</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded By Mika and <a href="https://github.com/aqualinka/react-dictionaryapp" target="_blank" rel="noopener noreferrer">open-sourced </a>
        </footer>
      </div>
     
    </div>
  );
}

export default App;
