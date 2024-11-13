'use client';

import { useState } from 'react';
import UploadForm from '@/components/UploadForm';

export default function Home() {
  const [response, setResponse] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <div className="w-full bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-white">Spending Habit Insights</h1>
          <p className="mt-2 text-gray-400">
            Upload your receipts to analyze your spending patterns
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Upload Section */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Upload Receipt</h2>
          <div className="bg-gray-900/50 rounded-xl p-6 border-2 border-dashed border-gray-700 hover:border-blue-500 transition-all duration-300">
            <UploadForm setResponse={setResponse} />
          </div>
        </div>

        {/* Analysis Results */}
        {response && (
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Analysis Results</h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <pre className="font-mono text-gray-300 whitespace-pre-wrap break-words">
                {response}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
