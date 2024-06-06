import Main from './components/Main';
import Footer from './components/Footer';
import List from './components/List';
import React, {useEffect} from 'react';
import {useState} from 'react';
import Header from './components/Header';
import {getPlanetData} from './api';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('Mercury');
  const [currentPlanetData, setCurrentPlanetData] = useState({});
  const [listItem, setListItem] = useState('overview');
  const navigate = (planet) => {
    setCurrentPlanet(planet);
    document.querySelector('.navbar-toggler').click();
  };

  const getData = async () => {
    const result = await getPlanetData(currentPlanet);
    setCurrentPlanetData(result);
  };

  useEffect(() => {
    getData();
  }, [currentPlanet]);

  return (
    <>
      <Header navigate={navigate} currentPlanet={currentPlanet} />
      <main>
        <Main mainDetails={currentPlanetData} listItem={listItem} />
        <List setListItem={setListItem} listItem={listItem} currentPlanet={currentPlanet.toLowerCase()} />
        <Footer footerDetails={currentPlanetData} />
      </main>
    </>
  );
}

export default App;
