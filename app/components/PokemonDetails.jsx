'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PokemonDetails({ pokemonId }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonId) {
      fetchPokemon();
    }
  }, [pokemonId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Pokemon...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Pokemon List
          </Link>
        </div>
      </div>
    );
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Pokemon List
        </Link>

        {/* Pokemon Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 mb-6 flex items-center justify-center">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                  width={256}
                  height={256}
                  className="w-64 h-64"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 capitalize mb-2">
                {pokemon.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-4">
                #{pokemon.id.toString().padStart(3, '0')}
              </p>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Types */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Types</h2>
              </div>

              {/* Stats */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Base Stats</h2>
              </div>

              {/* Abilities */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Abilities</h2>
              </div>

              {/* Physical Characteristics */}
              <div className="grid grid-cols-2 gap-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 