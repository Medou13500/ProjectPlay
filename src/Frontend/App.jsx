import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Accueil from './component/Accueil';
import FormulaireConnexion from './component/Connexion';
import FormulaireInscription from './component/Inscription';

function App() {
  const [dbStatus, setDbStatus] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8888/Backend/mvc/database.php')
      .then(response => {
        setDbStatus(response.data);
      })
      .catch(error => {
        setDbStatus({ status: "error", message: "Erreur de connexion" });
        console.error("Erreur :", error);
      });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <h1>Test de Connexion à la Base de Données</h1>
        {dbStatus ? (
          <p>{dbStatus.status === "success" ? dbStatus.message : `Erreur : ${dbStatus.message}`}</p>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/connexion" replace />} />
        <Route path="/connexion" element={<FormulaireConnexion />} />
        <Route path="/inscription" element={<FormulaireInscription />} />
        <Route path="/film" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
