import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

const middleWares = [logger, thunk];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
    rootReducer, 
    undefined, 
    composedEnhancers
);