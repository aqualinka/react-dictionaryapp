import Dictionary from "./Dictionary";
import './App.css';
import {FaGithub} from "react-icons/fa";
import {SiNetlify} from "react-icons/si";


function App() {


  return (
    <div className="App">
      <div className="container my-5">
        <header className="App-header">
          <h1>ENGLISH DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="coding"/>
        </main>
        <footer className="text-center">

        <span>Coded By Mika</span> | <a href="https://github.com/aqualinka/react-dictionaryapp" target="_blank" rel="noopener noreferrer">
          <FaGithub /></a> | <a href="https://relaxed-shockley-3c677b.netlify.app/"> <SiNetlify/> </a>
        </footer>
      </div>
     
    </div>
  );
}

export default App;
