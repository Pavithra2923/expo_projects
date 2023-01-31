import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Homescreen } from "../Screens/Home";
import { Profilescreen } from "../Screens/Profile";
import { Settingscreen } from "../Screens/Settings";
import { Searchsreeen } from "../Screens/Search";
import BottomTabNavigator from "./Tab";
import LoginPage from "../Screens/Login";
import { SignupScreen } from "../Screens/Signup";


const Stack = createStackNavigator();

export const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profilescreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Settings" component={Settingscreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Search" component={Searchsreeen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

 export const SignupStack =({navigation})=>{
  <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
 

 }