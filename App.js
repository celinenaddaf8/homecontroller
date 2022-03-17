import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';


import { SafeAreaView } from 'react-native-web';

//React Navigation Stack
import RootStack from './navigators/RootStack.js'

const App = () => {
  return(
    <View style={{flex:1}}>
      <RootStack/>
    </View>
  )
}


export default App;



