import "./App.css";
import Header from "../UI/Header";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {MainPage, CatalogPage, NotFoundPage, ProductPage } from "../../pages";



function App() {
  return (
    <div className="App" >
      <Header />
      <Container maxWidth="md" sx={{mt: "20px"}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
    
      </Routes>

        
      </Container>
    </div>
  );
}

export default App;
