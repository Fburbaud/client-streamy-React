import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //as is used to rename the variable so we don't get confused
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer
});