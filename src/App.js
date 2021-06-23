import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/ContactForm">
            <ContactForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
