import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Pokemon Gallery Browser</h1>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Developer Note:</strong> 
              </p>
              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                <li>• Edit <code className="bg-blue-200 px-1 rounded">app/components/PokemonGallery.jsx</code> to implement the Pokemon fetching logic</li>
                <li>• Edit <code className="bg-blue-200 px-1 rounded">app/components/PokemonCard.jsx</code> to display individual Pokemon data</li>
                <li>• Import and use the <code className="bg-blue-200 px-1 rounded">PokemonGallery</code> component in this <code className="bg-blue-200 px-1 rounded">app/page.js</code> file</li>
                <li>• Both components are client components (use 'use client') for interactivity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800 mb-2">Pro Tips for Success</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Start with the API call in PokemonGallery - test it in browser first</li>
                <li>• Use browser dev tools to inspect the API response structure</li>
                <li>• Test the grid layout at different screen sizes</li>
                <li>• Check that the loading spinner shows while fetching data</li>
                <li>• Verify hover effects work on both desktop and mobile</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 mb-2">Common Gotchas</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Remember to extract Pokemon ID from the URL string</li>
                <li>• Pokemon names should be capitalized in display</li>
                <li>• Handle API errors gracefully</li>
                <li>• Test navigation with Next.js router</li>
                <li>• Check that images load correctly from the sprite URLs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
