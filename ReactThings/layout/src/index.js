import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function HomeComponent(){
  return <h1>Home Component</h1>
}

function LoginComponent(){
  const navigate = useNavigate();
  const handleOnClick = () => {
    //window.location.href = "/";
    navigate("/");
    localStorage.setItem('token', 'deneme token');
  } 
  return (
    <>
      <h1>Login Component</h1>

      <button onClick={handleOnClick}>Giris yap</button>
    </>
  )
}

function AboutComponent(){
  return <h1>About Component</h1>
}

function LayoutComponent(){
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
  })

  function logout(){
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <button onClick={logout}> Cikis Yap </button>
        </ul>
      </nav>

      <Outlet/>
    </>
  )
}

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutComponent/>}>
        <Route index element={<HomeComponent/>}/>
        <Route path='about' element={<AboutComponent/>}/>
        <Route path='login' element={<LoginComponent/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
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
