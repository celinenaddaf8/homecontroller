import { View, ActivityIndicator } from 'react-native';




//React Navigation Stack
import RootStack from './navigators/RootStack.js'


const App = () => {
    return(
   <View style = {{flex:1}}>
   <RootStack/>)
   </View>

)};
export default App;



