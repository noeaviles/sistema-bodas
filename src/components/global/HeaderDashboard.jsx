import React from 'react'
import campana from '../../assets/notificacion.png';
import user from '../../assets/user.png';
import menu from '../../assets/menu.png';
import {connect} from 'react-redux';
import {handleMenu} from '../../redux/action';

const mapStateToProps = (state)=>{
  return {
      menuActive: state.reducer.menuActive,
  }
}

const HeaderDashboard = ( {menuActive,handleMenu}  ) => {
  return (
    <header className='Dashboard-header'>
      <nav className='Dashboard-nav'>
        <div className='Dashboard-iconMenu' onClick={ () => handleMenu(!menuActive)  }><img src={menu} alt="" /></div>
        <div  className='Dashboard-title'><h2>Bienvenido</h2></div>
        <div className='Dashboard-user'><img src={campana} alt="" /><img src={user} alt="" /></div>
      </nav>
    </header>
  )
}

export default connect(mapStateToProps,{handleMenu})(HeaderDashboard)
