/* eslint-disable no-unused-vars */
import {configureStore , combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import storage from 'redux-persist/lib/storage';
import  {persistReducer} from 'redux-persist'


const persistConfig ={
    key:"root",
    version:1,
    storage
}


const reducer = combineReducers({
    auth : authSlice,
})

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer :persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;