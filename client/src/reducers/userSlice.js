export function fetchUser(){
    return function (dispatch) {
        dispatch({ type: "user/loading" });
        fetch("/login")
            .then((r)=>r.json())
            .then((user)=> dispatch({
                type: "user/loaded",
                payload: user
            }));
    };
};

export function fetchNewUser(){
    return function (dispatch) {
        dispatch({ type: "user/loading" });
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content/Type": "application/json"
            }
        })
    }
}

const initialState = {
    entities: [],
    status: "idle"
};

export default function usersReducer(state = initialState, action){
    switch(action.type){
        case "user/loaded":
            return {
                status: "idle",
                entities: action.payload
            };

        case "user/loading":
            return {
                ...state,
                status: "loading"
            };

        default:
            return state;
    };
};