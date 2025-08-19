import React from 'react';
import Home from './pages/Home';
import FigmaTest from './components/FigmaTest';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Full-Stack App</h1>
          <nav className="mt-2">
            <span className="mr-4">Home</span>
            <span>Figma UI</span>
          </nav>
        </div>
      </header>
      <main>
        <Home />
        <FigmaTest />
      </main>
    </div>
  );
}

export default App;
