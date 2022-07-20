const initialState = {
    menuActive:false,
}

const reducer = (state=initialState,action) =>{
    switch (action.type){
        case "ACTIVAR_MENU" : {
            return {
                ...state,menuActive: action.payload,
            }
        }

        default: return state;
    }
    
}

export default reducer;