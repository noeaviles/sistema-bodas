const handleMenu = (event) =>{
    return {
        type:"ACTIVAR_MENU",
        payload:event
    }
}

export {handleMenu}