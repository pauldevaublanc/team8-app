import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'


export default function configureStore(initialState={}) {
    const enhancers = composeWithDevTools(applyMiddleware(thunk))
    return createStore(
        rootReducer,
        initialState,
        enhancers
    );
}