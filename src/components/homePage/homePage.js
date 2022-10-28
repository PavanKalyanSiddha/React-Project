import { useState } from "react";
import Header from "./header";
import MovieDetails from "./movieDetails";
import MoviesList from "./moviesList";
import { HomePageContainer } from "./style";

const HomePage = () => {
    const [movieDetails, setMovieDetails] = useState({
        name: "",
        image: "",
      });
  return (
  <HomePageContainer>
    <Header />
    {
        movieDetails.name.length > 0 ? <MovieDetails movieDetails={movieDetails} /> :
        <MoviesList setMovieDetails={setMovieDetails} />
    }

  </HomePageContainer>
  );
};

export default HomePage;
