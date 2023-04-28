import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/service";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

// birth: character.birth,
// gender: character.gender,
// race: character.race,
// spouse: character.spouse,
// wikiUrl: character.wikiUrl,
// id: character._id,
// name: character.name

function SingleCharacterPage() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const { getCharacterById } = useService();

  useEffect(() => {
    if (id === 0) return;
    getCharacterById(id).then((res) => {
      setCharacter(res);
      console.log(res);
    });
  }, [id]);

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          fontSize: "34px",
          padding: "10px 0",
        }}
      >
        {character.name}
      </Typography>
      <Typography
        paragraph={true}
        sx={{
          fontSize: "20px",
          listStyle: "none",
          
        }}
      >
        <li>Дата рождения: {character.birth}</li>
        <li>Пол: {character.gender}</li>
        <li>Раса: {character.race}</li>
        <li>Никнейм: {character.spouse}</li>
        <li>
          <Link href={character.wikiUrl} underline="none" target="_blank">
            Ссылка на википедию
          </Link>
        </li>
      </Typography>
    </div>
  );
}

export default SingleCharacterPage;
