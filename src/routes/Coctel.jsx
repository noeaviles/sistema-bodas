import React from 'react';
import iconPregunta from '../assets/iconoPregunta.png';

const Coctel = () => {
  return (
    <div className='Dashboard-main'>
                <form className='GlobalForm'>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Locación </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text"  className='GlobalForm-input'/>
                    </div>

                    <div className='GlobalForm-pregunta'>
                    <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Bebida para todos </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Tipo de música durante el coctel </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>

                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Sesión fotográfica </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                   
                    
                    <input type="submit" className='GlobalForm-button' value='Guardar'/>

                </form>
          </div>
  )
}

export default Coctel