import React from 'react';
import { Link } from 'react-router';

const Disclaimer = () => (
  <div className="training-disclaimer">
    <p>
      Aguarde enquanto verificamos se existe treino pra voce hoje.
      <Link to="/search"> Pesquise mais treinos no mapa </Link>
    </p>
  </div>
);

export default Disclaimer;