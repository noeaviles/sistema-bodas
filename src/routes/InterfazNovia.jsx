import React,{useState}from 'react'
import { NavLink} from "react-router-dom";
import menu from '../assets/menu.png'
import campana from '../assets/notificacion.png'
import user from '../assets/user.png'
import heart from '../assets/heart.png'
import people from '../assets/people.png'
import check from '../assets/check.png'
import mail from '../assets/Mail.png'

const InterfazNovia = () => {
  const [menuActive, setMenuActive] = useState(false)

  const handleMenu = ()=>{
    setMenuActive(!menuActive)
  }

  return (
    <div className='Novia'>
        <header className='Novia-header'>
          <nav className='Novia-nav'>
            <div className='Novia-iconMenu' onClick={handleMenu}><img src={menu} alt="" /></div>
            <div  className='Novia-title'><h2>Bienvenido</h2></div>
            <div className='Novia-user'><img src={campana} alt="" /><img src={user} alt="" /></div>
          </nav>
          
        </header>

        <div className='Novia-container'>
          <aside className= { menuActive ? 'Novia-menu Novia-menuActive' : 'Novia-menu' }>
              <ul className='Novia-ul'>
                <li className='Novia-li'><NavLink to='/novia-degustacion'>Home</NavLink></li>
                <li className='Novia-li'><NavLink to=''>Datos basicos</NavLink></li>
                <li className='Novia-li'><NavLink to=''>Degustación</NavLink></li>
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

          <div className='Novia-main'>

              <div className='Novia-cards'>
                  <div className="Novia-card">
                    <div className="Novia-icono"><img src={heart} alt="" /></div>
                    <div className="Novia-cardInfo">
                        <h4 className="Novia-h3">25 DIAS</h4>
                        <h3 className="Novia-h4">Falta</h3>
                        <p className="Novia-cardTextO">Mi boda 12/08/2022</p>
                    </div>
                  </div>
                  <div className="Novia-card">
                    <div className="Novia-icono"><img src={people} alt="" /></div>
                    <div className="Novia-cardInfo">
                        <h4 className="Novia-h3">30</h4>
                        <h3 className="Novia-h4">de 100</h3>
                        <p className="Novia-cardTextG">Invitados confirmados</p>
                    </div>
                  </div>
                  <div className="Novia-card">
                    <div className="Novia-icono"><img src={mail} alt="" /></div>
                    <div className="Novia-cardInfo">
                        <h4 className="Novia-h3">2</h4>
                        <h3 className="Novia-h4">Mensajes</h3>
                        <p className="Novia-cardTextR">Pendientes</p>
                    </div>
                  </div>
                  <div className="Novia-card">
                    <div className="Novia-icono"><img src={heart} alt="" /></div>
                    <div className="Novia-cardInfo">
                        <h4 className="Novia-h3">25 DIAS</h4>
                        <h3 className="Novia-h4">Falta</h3>
                        <p className="Novia-cardTextO">Mi boda 12/08/2022</p>
                    </div>
                  </div>
                  
              </div>

              <div className='Novia-items'>

                <div className="Novia-item">
                  <div className='Novia-itemText'>
                    <p>Datos basicos</p>
                    <div className='Novia-checkImg'><img src={check} alt="" /></div>
                  </div>
                  <div className='Novia-barra'><div className='Novia-barraComplete'></div></div>
                  <div className='Novia-respuestas'><p>10 de 10</p></div>
                </div>
                <div className="Novia-item">
                    <div className='Novia-itemText'>
                      <p>Degustación</p>
                      <div className='Novia-check'></div>
                    </div>
                    <div className='Novia-barra'><div className='Novia-barraPorcentaje'></div></div>
                    <div className='Novia-respuestas'><p>17 de 20</p></div>
                </div>
                <div className="Novia-item">
                  <div className='Novia-itemText'>
                    <p>Previo a la boda</p>
                    <div className='Novia-checkImg'><img src={check} alt="" /></div>
                  </div>
                  <div className='Novia-barra'><div className='Novia-barraComplete'></div></div>
                  <div className='Novia-respuestas'><p>10 de 10</p></div>
                </div>
                <div className="Novia-item">
                    <div className='Novia-itemText'>
                      <p>Ceremonia</p>
                      <div className='Novia-check'></div>
                    </div>
                    <div className='Novia-barra'><div className='Novia-barraPorcentaje'></div></div>
                    <div className='Novia-respuestas'><p>17 de 20</p></div>
                </div>
                <div className="Novia-item">
                  <div className='Novia-itemText'>
                    <p>Coctel</p>
                    <div className='Novia-checkImg'><img src={check} alt="" /></div>
                  </div>
                  <div className='Novia-barra'><div className='Novia-barraComplete'></div></div>
                  <div className='Novia-respuestas'><p>10 de 10</p></div>
                </div>
                <div className="Novia-item">
                    <div className='Novia-itemText'>
                      <p>Banquete</p>
                      <div className='Novia-checkImg'><img src={check} alt="" /></div>
                    </div>
                    <div className='Novia-barra'><div className='Novia-barraComplete'></div></div>
                    <div className='Novia-respuestas'><p>10 de 10</p></div>
                </div>
                <div className="Novia-item">
                    <div className='Novia-itemText'>
                      <p>Proveedor</p>
                      <div className='Novia-check'></div>
                    </div>
                    <div className='Novia-barra'><div className='Novia-barraPorcentaje'></div></div>
                    <div className='Novia-respuestas'><p>17 de 20</p></div>
                </div>
                <div className="Novia-item">
                    <div className='Novia-itemText'>
                      <p>Invitados</p>
                      <div className='Novia-checkImg'><img src={check} alt="" /></div>
                    </div>
                    <div className='Novia-barra'><div className='Novia-barraComplete'></div></div>
                    <div className='Novia-respuestas'><p>10 de 10</p></div>
                </div>
             
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default InterfazNovia