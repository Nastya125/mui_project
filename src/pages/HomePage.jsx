import { Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import homeImg from "../components/App/img/home.jpg";
import ModalNotification from "../modals";
import { useEffect, useState } from "react";

function HomePage() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch({
      type: "SET_TITLE",
      payload: "Вселенная Властелина Колец",
    });

    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "40px 0",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
        minHeight: "75vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "34px",
          padding: "20px 0",
        }}
      >
        Добро пожаловать во вселенную "Властелин колец"
      </Typography>
      <img className="img-home" src={homeImg} alt="Home image" />

      <Typography
        variant="body2"
        sx={{
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
      <ModalNotification isOpen={open} />
    </Paper>
  );
}

{
  /* <Button variant="outlined" onClick={handleClickOpen}>
Open form dialog
</Button> */
}

export default HomePage;
