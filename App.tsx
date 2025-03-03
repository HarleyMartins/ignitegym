import {useFonts, Roboto_700Bold, Roboto_400Regular} from "@expo-google-fonts/roboto"
import { StatusBar, Text, View } from "react-native"


export default function App(){
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})


  return(
    <View style={{flex: 1, alignItems: "center"}}>

      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} translucent />
      {fontsLoaded ? <Text>App pronto</Text> : <Text>App não está pronto</Text>}
    </View>
  )
}