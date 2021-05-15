import React from 'react'
import { View, Text } from 'react-native'
import persist from './Src/Redux/Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Index from './Src/Screens/index'

const persistStore = persist()

const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Index />
      </PersistGate>
    </Provider>
  )
}

export default App
