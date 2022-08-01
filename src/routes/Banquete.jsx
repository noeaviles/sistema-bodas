import React from 'react';
import iconPregunta from '../assets/iconoPregunta.png';

const Banquete = () => {
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
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Asignación de mesas </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora de asignación </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>

                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora ingreso de novios </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Cantante o agrupación </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Agregue un link de referencia (opcional) </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Plato de entrada </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Plato fuerte </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Postre </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                   
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Menu para menores </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Reporte alergias </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora de corte de pastel </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora de brindis </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora de palabras de agradecimiento </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora de primer vals de casados  </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Cancion de vals de casados </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Cantante o agrupación </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Agregue un link de referencia (opcional) </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <div className='GlobalForm-pregunta'>
                        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Vals con familia y adicionales </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
                        <input type="text" className='GlobalForm-input'/>
                    </div>
                    <input type="submit" className='GlobalForm-button' value='Guardar'/>

                </form>
          </div>
  )
}

export default Banquete