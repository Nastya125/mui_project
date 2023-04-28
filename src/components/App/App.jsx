import "./App.css";
import Header from "../UI/Header";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  CharacterPage,
  CatalogPage,
  NotFoundPage,
  ProductPage,
  SingleProduct,
  SingleCharacterPage
} from "../../pages";
import SideBar from "../UI/Sidebar";
import { useState } from "react";
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
            <Route index element={<CharacterPage />} />
            <Route path="/:id" element={<SingleCharacterPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
      <SideBar open={openSideBar} close={closeSidebar} />
    </div>
  );
}

export default App;
