import { CircularProgress, Divider, Grid, Stack, Typography } from "@mui/material";
import MultiActionAreaCard from "../components/UI/Card";
import { useEffect, useState } from "react";
import useService from "../helpers/service";

function MoviePage() {
  const [movieList, setMovieList] = useState([]);
  const { getAllMovie, loading } = useService();

  useEffect(() => {
    getAllMovie().then((res) => {
      setMovieList(res);
    });
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: "34px",
              padding: "20px 0",
              textShadow: "2px 2px 2px grey",
            }}
          >
            Фильмы вселенной Властелина Колец
          </Typography>
          <Divider />
          <Grid
            container
            spacing={1}
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            direction="row"
          >
            {movieList.map((movie) => {
              return (
                <Grid item xs={12} sm={3} md={4} lg={3} xl={3} key={movie.id}>
                  <MultiActionAreaCard movie={movie} />
                </Grid>
              );
            })}
          </Grid>
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




export default MoviePage;
