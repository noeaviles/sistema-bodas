import React from 'react'
import iconPregunta from '../assets/iconoPregunta.png';

const NoviaBasicos = () => {
    
  return (
          <div className='Dashboard-main'>
                <form className='GlobalForm'>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>¿Fecha de la boda? </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text"  className='GlobalForm-input'/>
                    </div>

                    <div className='GlobalForm-pregunta'>
                    <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>¿Que colores le gustan? </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>¿Que colores no le gustan? </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Tipo de ceremonia </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>

                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Paquete de boda </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Numero de adultos </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Numero de menores </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Numero de mesas</p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Locación de ceremonia </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Locación de banquete </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                   
                    
                    <input type="submit" className='GlobalForm-button' value='Guardar'/>

                </form>
          </div>
  
  )
}

export default NoviaBasicos