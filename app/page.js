import Image from "next/image";
import PokemonGallery from "./components/PokemonGallery";

export default function Home() {
  return (   
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <PokemonGallery />
      </div>
    </div>
  );
}
