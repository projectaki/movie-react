import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieProfile from "./Pages/MovieProfilePage/MovieProfile";
import "./App.css";
import Similar from "./Components/SimilarMovies/Similar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/MovieProfile/:id" component={MovieProfile}></Route>
        <Route exact path="/SimilarMovies" component={Similar}></Route>
      </Switch>
    </>
  );
}

export default App;
