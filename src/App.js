import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";

// Components
import Hero from "./components/hero.js";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { AppProvider } from "./context";
import Sidebar from "./components/sidebar";
import ScrollToTop from "./components/scrollToTop";
import BackToTop from "./components/backToTop";

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <BackToTop />
      </Router>
    </AppProvider>
  );
}

export default App;
