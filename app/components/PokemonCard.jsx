'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PokemonCard({ pokemon }) {
  const router = useRouter();
  // TODO: Extract Pokemon ID from pokemon.url
  // Example: "https://pokeapi.co/api/v2/pokemon/1/" -> 1
  const pokemonId = pokemon.url.split('/').filter(Boolean).pop();// Placeholder
  console.log(pokemonId);

  const handleClick = () => {
    // TODO: Navigate to Pokemon details page
    // router.push(`/pokemon/${pokemonId}`);
    router.push(`/pokemon/${pokemonId}`);
    console.log('Navigate to Pokemon details:', pokemonId);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer w-[200px] h-[250px] flex flex-col items-center justify-center p-4"
      onClick={handleClick}
    >
      { <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} height={96} width={96}
      />}
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Image</span>
      </div>
      
      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      <h3 className="font-semibold text-gray-800 mb-2 capitalize">
        Pokemon Name
      </h3>
      
      
      <p className="text-sm text-gray-600">
        {pokemon.id}
      </p>
    </div>
  );
}