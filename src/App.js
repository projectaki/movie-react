import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieProfile from "./Pages/MovieProfilePage/MovieProfile";
import "./App.css";
import Popular from "./Pages/PopularPage/Popular";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Upcoming from "./Pages/Upcoming/Upcoming";
import TopButton from "./Components/TopButton/TopButton";
import Location from "./Components/Location/Location";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <>
      <Navbar />
      <TopButton />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/MovieProfile/:id" component={MovieProfile}></Route>
        <Route exact path="/Popular" component={Popular}></Route>
        <Route exact path="/NowPlaying" component={NowPlaying}></Route>
        <Route exact path="/Upcoming" component={Upcoming}></Route>
        <Route exact path="/TEST" component={Location}></Route>
      </Switch>
    </>
  );
}

export default App;
