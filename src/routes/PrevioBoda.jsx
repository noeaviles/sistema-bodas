import React from 'react'
import iconPregunta from '../assets/iconoPregunta.png';

function PrevioBoda() {
  return (
    <div className='Dashboard-main'>
    <form className='GlobalForm'>
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>¿Llegada en autobús o individual? </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text"  className='GlobalForm-input'/>
        </div>

        <div className='GlobalForm-pregunta'>
        <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Hora de llegada planeada </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Los novios duermen en la misma habitación </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
        
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Donde se arregla la novia </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>

        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Hora donde se arregla la novia </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> # de personas que se arreglan con la novia </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'> Donde se arregla el novio </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'>Hora donde se arregla el novio</p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
        <div className='GlobalForm-pregunta'>
            <label htmlFor="" className='GlobalForm-label'> <p className='GlobalForm-p'># de personas que se arreglan con el novio </p><span className='GlobalForm-icono'><img src={iconPregunta} alt="" /></span> </label>
            <input type="text" className='GlobalForm-input'/>
        </div>
      
       
        
        <input type="submit" className='GlobalForm-button' value='Guardar'/>

    </form>
</div>
  )
}

export default PrevioBoda