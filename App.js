import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from "./Navigation/Tab";
import DrawerNavigator from "./Navigation/Drawer";
import { Profilescreen } from "./Screens/Profile";
import { Settingscreen } from "./Screens/Settings";
import { Searchsreeen } from "./Screens/Search";
import MainTabScreen from "./Navigation/Tab";
import { SafeAreaView } from "react-native";
import { Image } from "react-native-elements";
import LoginPage from "./Screens/Login";
import { MainStackNavigator } from "./Navigation/Stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginStack } from "./Navigation/Stack";
import { SignupScreen } from "./Screens/Signup";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [logged,isLogged] = useState(false)

  // useEffect(()=>{
  //  async function checkUserLogin(){
  //   const check=await AsyncStorage.getItem('current_user')
  //   if(check){
  //     isLogged(true)
  //   }
  //  }
  //  checkUserLogin()
  // },[])

 
  return (
   
    <NavigationContainer>
      { logged ? 
      <Drawer.Navigator useLegacyImplementation drawerContent={props => <DrawerNavigator {...props} logged={logged} isLogged={isLogged}/>}  >
        <Drawer.Screen name="Drawer" component={MainTabScreen} />
      </Drawer.Navigator>:
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} initialParams={{logged:logged,isLogged:isLogged}} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>       }
      {console.log("logged",logged)}
    </NavigationContainer>
    
  );
};

export default App;