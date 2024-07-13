import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Library from "./screens/Library";
import Feed from "./screens/Feed";
import Trending from "./screens/Trending";
import Player from "./screens/Player";
import Favourites from "./screens/Favourites";
import Navbar from "./components/Navbar";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
