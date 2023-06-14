import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './NavBar.scss';

export default function Header() {
  return (
    <div className="Head">
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </div>
  );
}
