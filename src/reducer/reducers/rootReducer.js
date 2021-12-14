import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({

    itemsReducer : itemsReducer,
    cartReducer: cartReducer
})

export default rootReducer