import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieProfile from "./Pages/MovieProfilePage/MovieProfile";
import "./App.css";
import Popular from "./Pages/PopularPage/Popular";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Upcoming from "./Pages/Upcoming/Upcoming";
import TopButton from "./Components/TopButton/TopButton";
import Location from "./Components/Location/Location";
import Main from "./Pages/Main/Main";
import { useState } from "react";

function App() {
  const [isMovie, setIsMovie] = useState(true);
  const setTag = () => {
    setIsMovie(sessionStorage.getItem("SELECTOR") === "movie" ? true : false);
  };

  return (
    <>
      <Navbar isMovie={isMovie} />
      <TopButton />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route
          exact
          path="/Home"
          render={(props) => (
            <Home {...props} setNav={setTag} isMovie={isMovie} />
          )}
        ></Route>
        <Route
          exact
          path="/MovieProfile/:id"
          render={(props) => <MovieProfile {...props} isMovie={isMovie} />}
        ></Route>
        <Route exact path="/Popular" component={Popular}></Route>
        <Route exact path="/NowPlaying" component={NowPlaying}></Route>
        <Route exact path="/Upcoming" component={Upcoming}></Route>
        <Route exact path="/TEST" component={Location}></Route>
      </Switch>
    </>
  );
}

export default App;
