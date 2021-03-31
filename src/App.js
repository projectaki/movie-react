import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
