// import React from 'react';
// import { Provider } from 'react-redux';

// import { NavigationContainer } from '@react-navigation/native';
// import { NativeBaseProvider } from 'native-base';
// import Navigation from './navigator/Navigation';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);


// const App = () => {
//   return (
//     <Provider store={store}>

//     <NativeBaseProvider>
//       <NavigationContainer>
//         <Navigation/>
//       </NavigationContainer>
//     </NativeBaseProvider>
//     </Provider>
//   )
// }

// export default App

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Navigation from './navigator/Navigation';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;
