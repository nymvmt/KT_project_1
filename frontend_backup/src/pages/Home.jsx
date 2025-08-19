import React, { useState } from 'react';

const Home = () => {
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const testBackendConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/test');
      const data = await response.text();
      setApiResponse(data);
    } catch (error) {
      setApiResponse('Backend connection failed: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Full-Stack App</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Backend Connection Test</h2>
        
        <button 
          onClick={testBackendConnection}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Backend Connection'}
        </button>
        
        {apiResponse && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <strong>Response:</strong> {apiResponse}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
