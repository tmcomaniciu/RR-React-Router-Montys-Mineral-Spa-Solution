import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <Container>
          <Nav defaultActiveKey="/" variant="tabs" fill>
            <Nav.Item>
              <Link to="/">
                <Nav.Link as="div" eventKey={"home"}>
                  Home
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about">
                <Nav.Link as="div" eventKey={"aboutPage"}>
                  About Us
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/packages">
                <Nav.Link as="div" eventKey={"packagesPage"}>
                  Our Packages
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Container>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/packages"
            render={() => <Packages packages={packages} />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
