import React from 'react';
import './App.css';
import TopBar from './components/topbar';
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
