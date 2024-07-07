import React from 'react';
import MyWeatherReport from './components/MyWeatherReport';
import MyNews from './components/MyNews';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <header>
                <div>
                  <h1>Our Personal Dashboard</h1>
                </div>
            </header>
            
                <MyWeatherReport />
                <MyNews />
            
        </div>
    );
};

export default App;
