import _ from "lodash";
import { 
    CREATE_STREAM, 
    FETCH_STREAMS, 
    FETCH_STREAM, 
    EDIT_STREAM, 
    DELETE_STREAM 
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_STREAMS:
        //mapKeys is a function that takes an array and make it into an object
        //the second argument will be the key of the created object.
        // the ... before mapKeys is to take all the objects created with if and
        //put the new array created with ...state
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};