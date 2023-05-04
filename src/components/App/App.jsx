import "./App.css";
import Header from "../UI/Header";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  CharacterPage,
  NotFoundPage,
  MoviePage,
  SingleCharacterPage,
  SingleMoviePage,
  HomePage
} from "../../pages";
import SideBar from "../UI/Sidebar";
import { useState, useEffect } from "react";
import Layout from "../UI/Layout";



function App() {
  const [openSideBar, setOpenSideBar] = useState(false);


  function openSidebar() {
    setOpenSideBar(true);
  }
  function closeSidebar() {
    setOpenSideBar(false);
  }

  return (
    <div className="App">
      <Header openSidebar={openSidebar} />
      <Container maxWidth="md" sx={{ mt: "20px" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/character/:id" element={<SingleCharacterPage />} />
            <Route path="/character" element={<CharacterPage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/movie/:id" element={<SingleMoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
      <SideBar open={openSideBar} close={closeSidebar} />
    </div>
  );
}

export default App;
