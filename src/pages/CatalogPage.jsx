import { Grid } from "@mui/material";
import MultiActionAreaCard from "../components/UI/Card";
import { useEffect, useState } from "react";
import useService from "../helpers/service";

function CatalogPage() {

  const [movieList, setMovieList] = useState([]);
  const [movieId, setMovieId] = useState(0);

  const { getAllMovie, getMovieById } =
  useService();

    useEffect(() => {
    getAllMovie().then((res) => {
      setMovieList(res);
    });
  }, []);

  useEffect(() => {
    if (movieId === 0) return;
    getMovieById(movieId).then((res) => {
      console.log(res);
    });
  }, [movieId]);


  return (
    <div>
      <Grid
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
      >
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default CatalogPage; 
