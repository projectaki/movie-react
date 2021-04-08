import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieProfile from "./Pages/MovieProfilePage/MovieProfile";
import "./App.css";
import Popular from "./Pages/PopularPage/Popular";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Upcoming from "./Pages/Upcoming/Upcoming";
import TopButton from "./Components/TopButton/TopButton";
import Main from "./Pages/Main/Main";
import { useState } from "react";
import Providers from "./Components/Providers/Providers";

function App() {
  const [isMovie, setIsMovie] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? true : false
  );
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
          render={(props) => <Home {...props} setNav={setTag} />}
        ></Route>
        <Route
          exact
          path="/MovieProfile/:id"
          render={(props) => <MovieProfile {...props} />}
        ></Route>
        <Route exact path="/Popular" component={Popular}></Route>
        <Route exact path="/NowPlaying" component={NowPlaying}></Route>
        <Route exact path="/Upcoming" component={Upcoming}></Route>
        <Route exact path="/TEST" component={Providers}></Route>
      </Switch>
    </>
  );
}

export default App;
