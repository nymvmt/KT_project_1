import React from 'react';

const FigmaTest = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Figma Components Test</h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h3 className="font-semibold">Basic Card</h3>
          <p>This is using Figma-style components</p>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Figma Style Button
        </button>
      </div>
    </div>
  );
};

export default FigmaTest;
