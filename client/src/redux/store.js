import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './users/userSlice.js';

import {persistReducer, persistStore} from 'redux-persist';//persistreducer is used to persist reducer
//persiststore is used to persist store
import storage from 'redux-persist/lib/storage'; //this library is used to store state in to local storage

const rootReducer = combineReducers ({user:userReducer}) //userreducer is from userslice
const persistConfig = { // we are storing this in an variable called key, its name can be eanything
    key : 'root',
    storage,
    version:1
};

const persistedReducer = persistReducer(persistConfig, rootReducer) // by passing the reducers and persist config we created persist reducer

export const store = configureStore({    //now an store created by passing persistreducer -- eralier its fomed by older version of reducer
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>
  
    getDefaultMiddleware({
        serializableCheck :false,
    }),
  
});


export const persistor = persistStore(store) // now along with store we also exported the persitstore 