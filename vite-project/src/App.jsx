import { useState } from "react"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { MapsMock } from "./components/MapsMock/MapsMock";
import { BrowserRouter } from "react-router-dom";
import { ItemListSuplementos } from "./components/ItemListSuplementos/ItemListSuplementos";
import { ItemListMedicamentos } from "./components/ItemListMedicamentos/ItemListMedicamentos";
import { ItemListCosmeticos } from "./components/ItemListCosmeticos/ItemListCosmeticos";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";

function App() {

  return (
    
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting = {"Bienvenido a tu Farmacia Virtual"} />}></Route>
        <Route path="comerce" element={<MapsMock></MapsMock>}></Route>
        <Route path="/suplementos" element={<ItemListSuplementos></ItemListSuplementos>}></Route>
        <Route path="/medicamentos" element={<ItemListMedicamentos></ItemListMedicamentos>}></Route>
        <Route path="/cosmeticos" element={<ItemListCosmeticos></ItemListCosmeticos>}></Route>
        <Route path="/item/:id" element={<ItemDetailConteiner></ItemDetailConteiner>}></Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
      
    
    <div className="Conteiner">
      
    </div>
    </BrowserRouter>
    </>
    
  )
}

export default App
