'use client';

import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonGallery() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch Pokemon data from PokeAPI
    // GET https://pokeapi.co/api/v2/pokemon?limit=20
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        setPokemon(data.results);
        setLoading(true);
        console.log(data);
      } catch(error) {
        console.error('Error fetching Pokemon:', error);
        setLoading(false);
      } finally {setLoading(false);}

    };
    fetchPokemon();
  }, []);
  console.log(loading);
  if (loading) {
    return (
    
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      { pokemon.map((pokemonItem, index) => (
        <PokemonCard key={index} pokemon={pokemonItem} />
      ))}
    </div>
  );
} 