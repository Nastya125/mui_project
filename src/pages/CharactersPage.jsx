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
import { LineWeight } from "@mui/icons-material";

function CharacterPage() {
  const [characterList, setCharacterList] = useState([]);
  const [characterId, setCharacterId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(20);
  const debounceSearchValue = useDebounce(searchValue, 1000);
  const { getAllCharacter, loading } = useService();

  useEffect(() => {
    getAllCharacter(limit).then((res) => {
      setCharacterList(res);
    });
  }, [limit]);

  useEffect(() => {
    if (debounceSearchValue) {
      getAllCharacter("", debounceSearchValue).then((res) => {
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
    <Paper 
    sx={{
      p:2,
      margin: "40px 0",
      justifyContent: "center",
      backgroundColor: "white",
      minHeight: "75vh",
    }}>
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
          
        />
      ) : (
        <Loader />
      )}
    </Paper>
  );
}

const Content = ({
  characterList,
  limit,
  setLimit,
  setCharacterId,
}) => {
  return (
    <>
      {characterList.length > 0 ? (
        <>
          <ul style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
            justifyContent: "center"
          }}
          >
            {characterList.length > 0 &&
              characterList.map((character) => {
                return (
                  <li key={character.id} >
                    <h2 onClick={() => setCharacterId(character.id)}>
                        <Link variant="body2" to={`/character/${character.id}`}>
                          {character.name}
                        </Link>
                    </h2>
                  </li>
                );
              })}
          </ul>
          <Button
            variant="outlined"
            color="primary"
            sx={{ margin: "20px auto", display: "block" }}
            onClick={() => setLimit(limit + 20)}
          >
            Показать еще
          </Button>
        </>
      ) : (
        <NotFound />
      )}
    </>
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

const NotFound = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "20px 0",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "25px",
          padding: "10px 0",
        }}
      >
        По данному запросу ничего не найдено
      </Typography>
    </Paper>
  );
};

export default CharacterPage;
