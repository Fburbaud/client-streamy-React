import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //as is used to rename the variable so we don't get confused
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

//const NodeMediaServer = require('node-media-server');

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});