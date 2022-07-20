import React from 'react'
import {connect} from 'react-redux';
import {handleMenu} from '../../redux/action'
import menu from '../../assets/menu.png'
import campana from '../../assets/notificacion.png'
import user from '../../assets/user.png'

const mapStateToProps = (state)=>{
    return {
        menuActive: state.reducer.menuActive,
    }
}

const HeaderUsers = ( {menuActive,handleMenu} ) => {
  return (
    <header className='Novia-header'>
    <nav className='Novia-nav'>
      <div className='Novia-iconMenu' onClick={ () => handleMenu(!menuActive)  }><img src={menu} alt="" /></div>
      <div  className='Novia-title'><h2>Bienvenido</h2></div>
      <div className='Novia-user'><img src={campana} alt="" /><img src={user} alt="" /></div>
    </nav>
  </header>
  )
}

 
export default connect(mapStateToProps,{handleMenu})(HeaderUsers)