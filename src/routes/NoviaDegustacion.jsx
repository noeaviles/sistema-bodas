import React from 'react'
import iconPregunta from '../assets/iconoPregunta.png'

const NoviaDegustacion = () => {
  return (
    <div className='Dashboard-main'>
                <form className='GlobalForm'>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>¿Fecha de la estancia? </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text"  className='GlobalForm-input'/>
                    </div>

                    <div className='GlobalForm-pregunta'>
                    <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Numero de personas </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Menú</p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Entrada </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    
                    <input type="submit" className='GlobalForm-button' value='Guardar'/>

                </form>
          </div>
  )
}

export default NoviaDegustacion