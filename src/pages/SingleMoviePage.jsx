import { useEffect, useState } from "react";
import useService from "../helpers/service";
import { useParams } from "react-router-dom";
import {
  Stack,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";

function SingleMoviePage() {
  const { getMovieById, getMovieQuote } = useService();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    if (id === 0) return;
    getMovieById(id).then((res) => {
      setMovie(res.docs[0]);
    });
    getMovieQuote(id).then((res) => {
      setQuote(res);
    });
  }, [id]);

  useEffect(() => {
    if (!quote) return;

  }, [quote]);

  return (
    <div>
      {movie  ? (
        <>
          <Typography
            variant="h2"
            sx={{
              fontSize: "34px",
              padding: "10px 0",
            }}
          >
            {movie.name}
          </Typography>
          <Paper
            sx={{
              p: 2,
              width: "500px",
              maxWidth: "100%",
              flexGrow: 1,
              justifyContent: "start",
            }}
          >
            <Typography
              paragraph={true}
              sx={{
                fontSize: "20px",
                listStyle: "none",
              }}
            >
              <li>Название: {movie.name}</li>
              <li>Оскар: {movie.academyAwardWins}</li>
              <li>Сборы за все время: {movie.boxOfficeRevenueInMillions + " 000 000 $"}</li>
              <li>Бюджет: {movie.budgetInMillions + " 000 000 $"}</li>
              <li>Продолжительность: {movie.runtimeInMinutes + "мин."}</li>
              <li>Рейтинг на 'Rotten Tomatoes': {movie.rottenTomatoesScore}</li>
      
            </Typography>
          </Paper>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

const Loader = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default SingleMoviePage;
