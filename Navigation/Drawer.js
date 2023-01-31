import React, { useEffect, useState } from "react";
import { createDrawerNavigator,DrawerContentScrollView,  DrawerItemList,  DrawerItem, } from "@react-navigation/drawer";
import { StyleSheet, View ,Image,Text} from "react-native";
import { Homescreen } from "../Screens/Home";
import { Profilescreen } from "../Screens/Profile";
import BottomTabNavigator from "./Tab";
import { Settingscreen } from "../Screens/Settings";
import { Searchsreeen } from "../Screens/Search";
import { MainStackNavigator } from "./Stack";
import { Header } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, ListItem } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

const [getdata,setGetdata] = useState("")
console.log("getDara",getdata.username)
  const get_data=async()=>{
    setGetdata( JSON.parse(await AsyncStorage.getItem('current_user')) )
    // console.log("getuser",getdata)
   }
const logOut  =async () =>{
 await AsyncStorage.removeItem('current_user')
 props.isLogged(false)
}
  useEffect(()=>{
    get_data()
  },[])

  return (
    <View  style={styles.drawerSection}>
       <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text 
            style={{
              padding:10,
              fontSize:20,
            }} 
            >{getdata.username}</Text>
          </View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KzPM3A418xgsJoPZyOqD6yklIBl_S-ngqA&usqp=CAU',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          </View>
          
      <DrawerItem   icon={({color, size}) => (
              <Icon 
                name="home-outline" 
                color={color}
                size={size}    />
              )}
            
              label="Home"
              onPress={() => {props.navigation.navigate('Home')}}
            />
      <DrawerItem 
          icon={({color, size}) => (
              <Icon 
              name="md-person" 
              color={color}
              size={size}
              />
          )}
          label="Profile"
          onPress={() => {props.navigation.navigate('Profile')}}
      />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="md-search" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Search"
                            onPress={() => {props.navigation.navigate('Search')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                  <DrawerItem style={styles.bottomDrawerSection}
                    icon={({color, size}) => (
                        <Icon 
                        name="log-in-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Log-out"
                    onPress={() => logOut()}
                />
            
           
    </View>
          
 );
};

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      margin:10,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
       position:"relative",
       marginTop:400,
       backgroundColor: '#f6f6f6',
    },
    
  });
export default DrawerNavigator;