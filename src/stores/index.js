import { configureStore } from "@reduxjs/toolkit";
import site from "./site";
import auth from "./auth";

const store = configureStore({
	reducer: {
		site,
		auth
	}
})

export default store
