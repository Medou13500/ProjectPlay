import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const GameList = () => {
    const [Gaming, setGaming] = useState([]);
    const [search, setSearch] = useState(''); // Utilisation de 'search' en camelCase

    const FilterSearch = () => {
        return Gaming.filter(item => item.internalName.toLowerCase().includes(search.toLowerCase()));
    };

    useEffect(() => {
        const GameApi = () => {
            axios.get("https://www.cheapshark.com/api/1.0/games?title=batman")
                .then(response => {
                    setGaming(response.data);
                })
                .catch(error => console.log(error.message));
        };
        GameApi();
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-center text-2xl font-bold mb-8">Liste des jeux Batman</h2>
            <input
                type="text"
                placeholder="Rechercher un jeu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-2 border rounded text-center mx-auto w-full sm:w-1/2 sm:ml-80"
            />


            <ul className="flex flex-wrap justify-center gap-8">
                {FilterSearch().map((game) => (
                    <li key={game.gameID} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-64 lg:w-80 xl:w-96">
                        <img src={game.thumb} alt={game.external} className="w-full h-48 object-cover rounded-md mb-4" />
                        <p className="text-lg lg:text-sm font-semibold mb-2 text-center truncate overflow-hidden whitespace-nowrap w-full">
                            {game.internalName}
                        </p>
                        <p className="text-gray-600 text-center mb-2">ID Steam : {game.steamAppID || "N/A"}</p>
                        <p className="text-gray-800 font-bold text-center">Prix le plus bas : ${game.cheapest}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;
