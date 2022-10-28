import { ButtonContainer } from "../login/style";
import { ListOfMovies } from "./shared/listOfMovies";
import { FlexContainer, GridContainer, MovieDetailContainer, MovieTitle } from "./style";

const MovieDetails = (props) => {
  const { movieDetails } = props;

  return (
    <MovieDetailContainer>
      <FlexContainer>
        <div>
          <img src={movieDetails.image} alt={movieDetails.name} />
        </div>
        <div style={{paddingLeft: "40px"}}>
          <MovieTitle> {movieDetails.name} </MovieTitle>
          <MovieTitle> {movieDetails.genre} </MovieTitle>
          <MovieTitle> {movieDetails.duration} </MovieTitle>
          <FlexContainer>
            <ButtonContainer>Watch Now</ButtonContainer>
            <ButtonContainer
              style={{
                border: "1px solid green",
                background: "white",
                color: "green",
              }}
            >
              Watch Later
            </ButtonContainer>
          </FlexContainer>
        </div>
      </FlexContainer>

      <p>
        {
            movieDetails.description
        }
      </p>

      <MovieTitle style={{ color: "green" }}> Similar Movies </MovieTitle><br></br>
      <GridContainer>
        {ListOfMovies.length > 0 &&
          ListOfMovies.map((movie, idx) => {
            return (
               idx <4 && <div key={idx}>
                <img src={movie.image} alt="" />
                <MovieTitle> {movie.name} </MovieTitle>
                <MovieTitle style={{ color: "green" }}> Play Now </MovieTitle>
              </div>
            );
          })}
      </GridContainer>
    </MovieDetailContainer>
  );
};

export default MovieDetails;
