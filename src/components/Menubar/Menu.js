import React from 'react';
import { NavLink } from 'react-router-dom';

import './menubar.css'

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><NavLink exact to="/" activeClassName="active">Обо мне</NavLink></li>
      <li onClick={close}><NavLink to="/portfolio" activeClassName="active">Портфолио</NavLink></li>
      <li onClick={close}><NavLink to="/apps" activeClassName="active">Приложения</NavLink></li>
      <li onClick={close}><NavLink to="/contact" activeClassName="active">Контакты</NavLink></li>
    </ul>
  </div>
);