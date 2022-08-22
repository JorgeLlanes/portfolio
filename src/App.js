import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from "./components/main/Heading";
import Works from "./components/projects/Works";
import Projects from "./components/projects/sites/Projects";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scrollTop/Scroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={[
              <Scroll />,
              <Heading />,
              <Works />,
              <Projects />,
              <Skills />,
              <About />,
              <Contact />,
              <Footer />,
            ]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
