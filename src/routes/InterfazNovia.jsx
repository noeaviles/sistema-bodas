import React from 'react'
import heart from '../assets/heart.png'
import people from '../assets/people.png'
import check from '../assets/check.png'
import mail from '../assets/Mail.png'


const InterfazNovia = ( ) => {


  return (
    <div className='Novia'>

        <div className='Novia-container'>

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