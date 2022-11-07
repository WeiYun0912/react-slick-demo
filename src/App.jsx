import movies from "./movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="wrap">
            <img src={movie.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
