import React from 'react'
import {connect} from 'react-redux';
import { NavLink} from "react-router-dom";

const mapStateToProps = (state)=>{
  return {
      menuActive: state.reducer.menuActive,
  }
}

const AsideMenu = ( {menuActive} ) => {
  return (
    <aside className= { menuActive ? 'Dashboard-menu Dashboard-menuActive' : 'Dashboard-menu' }>
        <ul className='Dashboard-ul'>
            <li className='Dashboard-li'><NavLink to='novia'>Home</NavLink></li>
            <li className='Dashboard-li'><NavLink to='novia-basicos'>Datos basicos</NavLink></li>
            <li className='Dashboard-li'><NavLink to='novia-degustacion'>Degustación</NavLink></li>
            <li className='Dashboard-li'><NavLink to='novia-previoBoda'>Previo a la boda</NavLink></li>
            <li className='Dashboard-li'><NavLink to='novia-ceremonia'>Ceremonia</NavLink></li>
            <li className='Dashboard-li'><NavLink to='novia-coctel'>Coctel</NavLink></li>
            <li className='Dashboard-li'><NavLink to='novia-banquete'>Banquete</NavLink></li>
            <li className='Dashboard-li'><NavLink to=''>Proveedores</NavLink></li>
            <li className='Dashboard-li'><NavLink to=''>Invitados</NavLink></li>
            <li className='Dashboard-li'><NavLink to=''>Mensajes</NavLink></li>
            <li className='Dashboard-li'><NavLink to=''>Cerrar Sesión</NavLink></li>
        </ul>
    </aside>
  )
}



export default connect(mapStateToProps)(AsideMenu)