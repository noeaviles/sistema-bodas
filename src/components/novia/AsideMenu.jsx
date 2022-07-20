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
    <aside className= { menuActive ? 'Novia-menu Novia-menuActive' : 'Novia-menu' }>
        <ul className='Novia-ul'>
            <li className='Novia-li'><NavLink to='/novia'>Home</NavLink></li>
            <li className='Novia-li'><NavLink to='/novia-basicos'>Datos basicos</NavLink></li>
            <li className='Novia-li'><NavLink to='/novia-degustacion'>Degustación</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Previo a la boda</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Ceremonia</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Coctel</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Banquete</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Proveedores</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Invitados</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Mensajes</NavLink></li>
            <li className='Novia-li'><NavLink to=''>Cerrar Sesión</NavLink></li>
        </ul>
    </aside>
  )
}



export default connect(mapStateToProps)(AsideMenu)