import PokemonDetails from '../../components/PokemonDetails';

export default function Page({ params }) {
  return <PokemonDetails pokemonId={params.id} />;
} 