import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (

    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button className="burger" onClick={openMenu}>
                &#9776;
              </button>
                <Link to="/">
                  <img className="logo" src='/img/logo.png' alt=""></img>
                </Link>
            </div>
            <div className="header-links">
              <a href="cart.html">Carrito</a>
              <Link to="/signin"/>
              <a href="signin.html">Iniciar sesión</a>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Categorías</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
              <li>
                <a href="index.html">Tecnología</a>
              </li>
              <li>
                <a href="index.html">Deportes</a>
              </li>
            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <Route path="/signin" component={SigninScreen}/>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
            </div>
          </main>
          <footer className="footer">
            Todos los derechos reservados
          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
