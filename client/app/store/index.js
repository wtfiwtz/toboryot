import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createReducer from '../reducers';

const devtools = window.devToolsExtension || (() => (noop) => noop); // eslint-disable-line

export default function configureStore(initialState = {}, history) {
    const middlewares = [
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ];

    const store = createStore(
        createReducer(),
        initialState,
        compose(...enhancers)
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            System.import('../reducers').then((reducerFunction) => {
                const createReducers = reducerFunction.default;
                const nextReducers = createReducers();
                store.replaceReducer(nextReducers);
            });
        });
    }

    return store;
}