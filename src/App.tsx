import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { AppPreview } from './components/AppPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Features />
      <AppPreview />
    </div>
  );
}

export default App;