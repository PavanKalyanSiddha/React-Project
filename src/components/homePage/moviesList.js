import { ButtonContainer } from "../login/style";
import { ListOfMovies } from "./shared/listOfMovies";
import { MoviesContainer, MovieTitle } from "./style";
// import axios from "axios";

const MoviesList = (props) => {
  const { setMovieDetails } = props;
  const requestURL = "https://rapidapi.com/";


  // const moviesData = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Access-Control-Allow-Origin': '*',
  //         }
  //       }
        
  //       const data = {
  //         title: "game of"
  //        }

  //   await axios
  //     .get(requestURL + "title/v2/find", data, config)
  //     .then((response) => {
  //       console.log("response", response);
  //     });
            
  //   } catch (error) {
  //    console.log("error", error) 
  //   }
  // };
  // useEffect(() => {
  //   // moviesData();
  // }, []);

  return (
    <MoviesContainer>
      {ListOfMovies.length > 0 &&
        ListOfMovies.map((movie, idx) => {
          return (
            <div key={idx} onClick={() => setMovieDetails(movie)}>
              <img src={movie.image} alt="img" />
              <MovieTitle> {movie.name} </MovieTitle>
              <MovieTitle style={{ color: "green" }}> Play Now </MovieTitle>
            </div>
          );
        })}
      <ButtonContainer style={{ left: "100%" }}> See More </ButtonContainer>
    </MoviesContainer>
  );
};

export default MoviesList;
