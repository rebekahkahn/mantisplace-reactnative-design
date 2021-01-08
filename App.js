import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Main from './components/MainComponent';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Aladin': require('./assets/fonts/Aladin-Regular.ttf'), 
    'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider>
        <Main />
      </PaperProvider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);