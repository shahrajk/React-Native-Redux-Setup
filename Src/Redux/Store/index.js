import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from '../Reducer/index'
import ReduxThunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
    let persistor = persistStore(store)
    return { store, persistor }
}