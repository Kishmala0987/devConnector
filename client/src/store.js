import {createStore, applyMiddleware} from "redux"; //configureStore is used to create a Redux store, applyMiddleware is used to apply middleware to the store
//meaning that it allows us to add functionality to the store, such as logging or handling asynchronous actions
import {composeWithDevTools} from "redux-devtools-extension"; //composeWithDevTools is used to enhance the store with DevTools support \
import {thunk} from "redux-thunk" 
import rootReducer from "./reducers";
//reducers are functions that take the current state and an action, and return a new state
// The rootReducer is used to create the store, which is the central place where the state of the application is stored
// The store is created using the createStore function, which takes the rootReducer and applies middleware to it
const initialState = {}; //initial state of the store, which is an empty object
const middleware = [thunk]; //middleware is an array that contains the middleware to be applied to the store
//thunk is added to the middleware array, which allows us to write asynchronous action creators meaning that it allows us to write action creators that return a function instead of an action matlab k hum asynchronous actions likh sakte hain
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))//composeWithDevTools is used to enhance the store with DevTools support, applyMiddleware is used to apply the middleware to the store
);

export default store; 
//in this file we are creating a Redux store using the createStore function from the redux library.
//We are also applying middleware to the store using the applyMiddleware function from the redux library. 
//The middleware we are applying is thunk, which allows us to write asynchronous action creators.
//The rootReducer is imported from the reducers directory, which contains all the reducers for the application.
//The initialState is an empty object, which is the initial state of the store.
