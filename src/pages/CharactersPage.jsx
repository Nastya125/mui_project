import { useEffect, useState } from "react";
import useService from "../helpers/service";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";


function CharacterPage() {
  const [characterList, setCharacterList] = useState([]);
  const [characterId, setCharacterId] = useState(0);
  const { getAllCharacter } = useService();

  useEffect(() => {
    getAllCharacter().then((res) => {
      setCharacterList(res);
    });
  }, []);

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "34px",
          padding: "10px 0",
        }}
      >
        Портал, посвященный вселенной Властелина Колец
      </Typography>
      <Divider />
      <TextField
        sx={{ m: 1, width: "100%", margin: "10px 0" }}
        id="outlined-basic"
        label="Поиск по персонажам"
        variant="outlined"
      />
      <ul>
        {characterList &&
          characterList.map((character) => {
            return (
          
                
                <li key={character.id}>
                  <h2 onClick={() => setCharacterId(character.id)}>
                    <Typography
                      variant="h5"
                    >
                      <Link to={`/${character.id}`}>{character.name}</Link>
                    </Typography>
                  </h2>
                </li>
               

            );
          })}
      </ul>
    </div>
  );
}

export default CharacterPage;
