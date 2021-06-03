import Dictionary from "./Dictionary";
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="container my-5">
        <header className="App-header">
          <h1 className="text-center">D.I.C.T.I.O.N.A.R.Y</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunshine"/>
        </main>
        <footer className="text-center">
          Coded By Mika | <a href="https://github.com/aqualinka/react-dictionaryapp" target="_blank" rel="noopener noreferrer">open-sourced on Github</a>| hosted on <a href="https://relaxed-shockley-3c677b.netlify.app/">Netlify</a>
        </footer>
      </div>
     
    </div>
  );
}

export default App;
