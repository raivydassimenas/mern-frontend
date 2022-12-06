// import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';

// // export const store = configureStore({
// //   reducer: {
// //     auth: authReducer
// //   },
// // });

// const combinedReducer = combineReducers({
//   auth: authReducer,
// });

// const rootReducer = (state, action) => {
//   if (action.type === 'auth/logout') {
//     state = undefined;
//   }
//   return combinedReducer(state, action);
// };

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware()]
// })

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
// import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    //goals: goalReducer,
  },
})