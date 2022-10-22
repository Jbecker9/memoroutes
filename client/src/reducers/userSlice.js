export const getUser = (userData) => {
    return {
        type: "user/get",
        payload: userData
    }
}

const initialState = []

export default function usersReducer(state = initialState, action){
    switch(action.type){
        case "user/get":
            return [action.payload];

        default:
            return state;
    }
}