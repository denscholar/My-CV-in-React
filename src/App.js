import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
