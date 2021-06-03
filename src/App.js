import Dictionary from "./Dictionary";
import './App.css';
import {FaGithub} from "react-icons/fa";

function App() {


  return (
    <div className="App">
      <div className="container my-5">
        <header className="App-header">
        
          <h1 className="text-center">D.I.C.T.I.O.N.A.R.Y</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="coding"/>
        </main>
        <footer className="text-center">

          Coded By Mika | <a href="https://github.com/aqualinka/react-dictionaryapp" target="_blank" rel="noopener noreferrer">
          <FaGithub /> </a>| hosted on <a href="https://relaxed-shockley-3c677b.netlify.app/">Netlify</a>
        </footer>
      </div>
     
    </div>
  );
}

export default App;
