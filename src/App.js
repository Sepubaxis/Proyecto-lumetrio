import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import SearchIcon from "./componentes/search.svg";
import MovieCard from "./componentes/MovieCard";

import Menu from "./componentes/Menu";
import Inicio from './componentes/Paginas/Inicio'
import Info from './componentes/Paginas/Info'
import Form from './componentes/Paginas/Form'
import Contacto from './componentes/Paginas/Contacto'

const API_URL = "http://www.omdbapi.com?apikey=9cc76b56";

const App = () => {
  const [buscar, setBuscar] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    buscarPeliculas("Die Hard");
  }, []);

  const buscarPeliculas = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <>
    
    <Router>
      <Menu />
      <Routes>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
      </Routes>
    </Router>
    
    <div className="app">
      <h1>Peliculas Database</h1>

      <div className="search">
        <input
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder="Busca una pelicula!"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => buscarPeliculas(buscar)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No se encontraron las peliculas que buscas</h2>
        </div>
      )}
    </div>
    
    </>
  );
};

export default App