import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/service";
import { Stack, CircularProgress, Typography, Button, Paper } from "@mui/material";


// birth: character.birth,
// gender: character.gender,
// race: character.race,
// spouse: character.spouse,
// wikiUrl: character.wikiUrl,
// id: character._id,
// name: character.name

function SingleCharacterPage() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const { getCharacterById } = useService();

  useEffect(() => {
    if (id === 0) return;
    getCharacterById(id).then((res) => {
      setCharacter(res);
    });
  }, [id]);

  return (
    <div>
      {character ? (
        <>
          <Typography
            variant="h2"
            sx={{
              fontSize: "34px",
              padding: "10px 0",
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
