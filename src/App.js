
import './App.css';
import Dictionary from "./Dictionary";

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
          Coded By Mika <a href="">open-sourced on Github</a>
        </footer>
      </div>
     
    </div>
  );
}

export default App;
