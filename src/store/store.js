import { createStore } from "redux";
import reducer from "./reducers/card";

export const store = createStore(reducer);
