import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/service";
import { Stack, CircularProgress, Typography, Button, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

function SingleCharacterPage() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const { getCharacterById } = useService();
  const characters = useSelector((state) => state.character);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id === 0) return;
    getCharacterById(id).then((res) => {
      setCharacter(res);
    });
  }, [id]);

  useEffect(() => {
    if (!character) return; 
      dispatch({
        type: "SET_TITLE",
        payload: character.name,
      });
    
  }, [character]);

  return (
    <div>
      {character ? (
        <>
          <Typography
            variant="h2"
            sx={{
              fontSize: "34px",
              padding: "10px 0",
              textShadow: "2px 2px 2px grey",

            }}
          >
            {character.name}
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
            <li>Имя персонажа: {character.name}</li>
            <li>Дата рождения: {character.birth}</li>
            <li>Дата смерти: {character.death}</li>
            <li>Пол: {character.gender}</li>
            <li>Раса: {character.race}</li>
            <li>Никнейм: {character.spouse}</li>
            <li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ margin: "20px 0 0" }}
                href={character.wikiUrl}
                target="_blank"
              >
                Ссылка на википедию
              </Button>
            </li>
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

export default SingleCharacterPage;
