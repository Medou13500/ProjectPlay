import Header from "./Header"; // Chemin pour Header.jsx dans component
import GameList from "./GameList"; // Chemin pour GameList.jsx dans component

function Accueil() {
  return (
    <div>
      <Header />
      <GameList />
    </div>
  );
}

export default Accueil;
