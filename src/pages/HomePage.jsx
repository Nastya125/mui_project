import { Paper, Typography } from "@mui/material";

function HomePage() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "40px 0",
        justifyContent: "center",
        backgroundColor: "white",
        minHeight: "75vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "34px",
          padding: "20px 0",
        }}
      >
        Добро пожаловать во вселенную "Властелин колец"
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          fontSize: "22px",
          margin: "40px 20px",
        }}
      >
        Мир Толкиена, созданный в романах «Властелин колец», является одним из
        самых знаменитых и любимых в мире фантастики. Эпическая битва добра и
        зла, мирное единство рас, красивые пейзажи и зыбкое чувство волшебного
        присутствия — все это притягивает многочисленных поклонников фильмов,
        книг и сериалов.
      </Typography>
    </Paper>
  );
}

export default HomePage;
