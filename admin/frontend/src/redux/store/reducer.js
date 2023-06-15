import { combineReducers } from "redux";

// reducer import
import authReducer from "../auth/auth.reducer";
import blogSlice from "../blog/blog.reducer";
import eventSlice from "../event/event.reducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  auth: authReducer,
  blogs: blogSlice,
  event: eventSlice,
});

export default reducer;
