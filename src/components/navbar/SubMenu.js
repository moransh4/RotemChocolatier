import React from 'react';
import { NavLink } from 'react-router-dom';
import subMenues from './subMenues.json'

const SubMenu = (props) => (
    <div  className={`submenu ${props.isActive ? 'active' : ''}`} >
      <ul>
        {subMenues[props.name]?.links?.map((item, index) => {
            return (<li key={index}><NavLink to={item.to} onClick={() => props.onClick()}>{item.name}</NavLink></li>)})}
      </ul>
    </div>
  );

  export default SubMenu;
