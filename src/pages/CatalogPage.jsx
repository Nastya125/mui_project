import { Grid } from "@mui/material";
import MultiActionAreaCard from "../components/UI/Card";

function CatalogPage() {
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
