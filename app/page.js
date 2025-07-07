import Image from "next/image";
import PokemonGallery from './components/PokemonGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Pokemon Gallery Browser</h1>
        <PokemonGallery key="pokemon-gallery" />
      </div>
    </div>
  );
}
