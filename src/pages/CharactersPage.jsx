import { useEffect, useState } from "react";
import useService from "../helpers/service";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useDebounce from "../helpers/dobounce";
import { Stack, CircularProgress } from "@mui/material";
import Paper from "@mui/material/Paper";

function CharacterPage() {
  const [characterList, setCharacterList] = useState([]);
  const [characterId, setCharacterId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(10);
  const debounceSearchValue = useDebounce(searchValue, 1000);
  const { getAllCharacter, loading } = useService();

  useEffect(() => {
    getAllCharacter(limit).then((res) => {
      setCharacterList(res);
    });
  }, [limit]);

  useEffect(() => {
    if (debounceSearchValue) {
      getAllCharacter(limit, debounceSearchValue).then((res) => {
        setCharacterList(res);
      });
    }
    if (debounceSearchValue === "") {
      getAllCharacter(limit).then((res) => {
        setCharacterList(res);
      });
    }
  }, [debounceSearchValue]);

  function handlerSearch(event) {
    setSearchValue(event.target.value);
  }

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
        Персонажи вселенной Властелина Колец
      </Typography>
      <Divider />

      <TextField
        sx={{ m: 1, width: "100%", margin: "10px 0" }}
        id="outlined-basic"
        label="Поиск по персонажам"
        onChange={(e) => handlerSearch(e)}
        variant="outlined"
      />

      {!loading ? (
        <Content
          characterList={characterList}
          limit={limit}
          setLimit={setLimit}
          handlerSearch={handlerSearch}
          setCharacterId={setCharacterId}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

const Content = ({
  characterList,
  limit,
  setLimit,
  setCharacterId,
}) => {
  return (
    <div>
      <ul>
        {characterList &&
          characterList.map((character) => {
            return (
              <li key={character.id}>
                <h2 onClick={() => setCharacterId(character.id)}>
                  <Typography variant="h5">
                    <Link to={`/${character.id}`}>{character.name}</Link>
                  </Typography>
                </h2>
              </li>
            );
          })}
      </ul>
      <Button
        variant="outlined"
        color="primary"
        sx={{ margin: "20px auto", display: "block" }}
        onClick={() => setLimit(limit + 10)}
      >
        Показать еще
      </Button>
    </div>
  );
};

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

export default CharacterPage;
