// New way to use redux by using redux toolkit

import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
	// Specific every reducer that has been created for this app here:
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer
	}
})