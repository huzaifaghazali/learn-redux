// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';

import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/CustomerSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

// ****** OLD WAY ****** //
// const rootReducer = combineReducers({
// account: accountReducer,
// customer: customerReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)) // add developer redux tools
// );

// ************ //
export default store;
