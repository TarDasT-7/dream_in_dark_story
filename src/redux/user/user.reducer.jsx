const INITIAL_STATE = {
    currrentUser:null
}

const UserReducer = (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case 'SET_CURRENT_USER' :
            return {
                ...state,
                currrentUser:action.payload
            }

        default :
            return state;

    }

}

export default UserReducer;