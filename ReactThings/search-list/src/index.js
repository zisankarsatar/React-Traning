import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function App(){
  const [names, setNames] = useState([
    "Zisan","Abdullah","Fatmanur","Nurullah","Suna","Busra"
  ]);

  const [search, setSearch] = useState("");
  const filterNames = names.filter( s => s.toLowerCase().includes(search.toLowerCase()));
  return(
    <>
      <h2>Search List</h2>
      <input type="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <ul>
        {
          filterNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        }
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
