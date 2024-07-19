import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covidSlice";

export default configureStore({ reducer: covidReducer });
