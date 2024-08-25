import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covidSlice";
import { composeWithDevTools } from "@redux-devtools/extension";

export default configureStore({ reducer: covidReducer, composeWithDevTools });
