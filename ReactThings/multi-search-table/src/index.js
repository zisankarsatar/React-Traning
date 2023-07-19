import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function App(){
  const [users, setUsers] = useState([
    {
      name: "Zisan",
      lastName: "Karsatar Caliskan",
      age: "24"
    },
    {
      name: "Kadirhan",
      lastName: "Caliskan",
      age: "2"
    },
    {
      name: "Suna",
      lastName: "Caliskan",
      age: "28"
    },
    {
      name: "Abdullah",
      lastName: "Caliskan",
      age: "27"
    },
    {
      name: "Nurullah",
      lastName: "Caliskan",
      age: "29"
    },
    {
      name: "Busra",
      lastName: "Karsatar",
      age: "27"
    },
    {
      name: "Fatmanur",
      lastName: "Karsatar",
      age: "20"
    },
  ]);

  const [search, setSearch] = useState("");
  const filterTable = users.filter(
    (u) => u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.lastName.toLowerCase().includes(search.toLowerCase()) ||
    u.age.includes(search)
  )

  return(
    <>
      <h1>Multi Search on Table</h1>
      <input value={search} name='search' onChange={(e) => setSearch(e.target.value)}/>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
        {
          filterTable.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))
        }
      </table>
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
