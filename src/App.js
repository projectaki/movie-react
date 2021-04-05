import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieProfile from "./Pages/MovieProfilePage/MovieProfile";
import "./App.css";
import Popular from "./Pages/PopularPage/Popular";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Upcoming from "./Pages/Upcoming/Upcoming";
import TopButton from "./Components/TopButton/TopButton";

function App() {
  return (
    <>
      <Navbar />
      <TopButton />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/MovieProfile/:id" component={MovieProfile}></Route>
        <Route exact path="/Popular" component={Popular}></Route>
        <Route exact path="/NowPlaying" component={NowPlaying}></Route>
        <Route exact path="/Upcoming" component={Upcoming}></Route>
      </Switch>
    </>
  );
}

export default App;
