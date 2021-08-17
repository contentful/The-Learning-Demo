import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import { encryptTransform } from "redux-persist-transform-encrypt";

import testSlice from "../commonSlices/testSlice";





const reducers = combineReducers({
  test: testSlice,
});

// const encryptor = createEncryptor({
//   secretKey: "99xx45ghty",
// });
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;