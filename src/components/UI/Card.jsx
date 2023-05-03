import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import imgFilm from '../../components/App/img/films.jpeg';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgFilm}
          alt="ring"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/movie/${movie.id}`}>
        <Button size="small" color="primary">
          Подробнее
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
