import React from 'react';
// import Gallery2 from './Gallery2';
import Header from './Header';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';
import './App.scss';

function App() {
  const [, setSearch] = React.useState('');
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/countries');

      if (response.data) {
        const data = response.data.result.map((item) => ({
          code: item.code,
          name: item.name,
        }));

        setCountries(data);
      }
    };

    fetch();
  }, []);

  return (
    <>
      {/* // <div style={{ background: `url('images/bg7.jpg') no-repeat center fixed`, backgroundSize: 'cover' }}> */}
      <Header countries={countries} setSearch={setSearch} />
      {/* <Gallery2 countries={countries} search={search}/> */}
      <Dashboard />
    </>
  );
}

export default hot(module)(App);
