import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Reels from "./Components/Reels";
import Home from "./Components/Home";
import Photos from "./Components/Photos";
import Footer from "./Components/Footer";
import Biography from "./Components/Biography";
import Youtube from "./Components/Youtube";
import Click from "./Components/Click";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Click/>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Reels">
            <Reels />
          </Route>
          <Route path="/Photos">
            <Photos />
          </Route>
          <Route path="/Biography">
            <Biography />
          </Route>
          <Route path="/Youtube">
            <Youtube />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
