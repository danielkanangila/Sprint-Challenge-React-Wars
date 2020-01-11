import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import PeopleCards from './components/Peoples/PeopleCards';
import Footer from './components/Footer';

const API_URL = 'https://swapi.co/api/people/';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setData(res.data);
    }).catch(err => console.error(err));
  }, []);

  const search = (event) => {
      const URL = `https://swapi.co/api/people/?search=${event.target.value}`;

      axios.get(URL).then(res => {
        setData(res.data);
      }).catch(err => console.error(err));
  }

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Navbar />
      <Header handleChange={ search } />
      <Container>
        <PeopleCards count={data?.count} people={data?.results} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
