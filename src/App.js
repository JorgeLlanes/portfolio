import "./App.css";
import Heading from "./components/main/Heading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./components/projects/Works";
import Projects from "./components/projects/sites/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={[<Heading />, <Works />, <Projects />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
