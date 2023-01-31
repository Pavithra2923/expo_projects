import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View,Image,  TextInput,Button,  TouchableOpacity, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from "../App";
import { set } from "react-native-reanimated";
import { users } from "./User";

export default function LoginPage({route,navigation}) {
  console.log("props",route)
  
  const [userDetails,setUserDetails]=useState(
    {
      username:"",
      password:""
    }
  )
 const [registerData,setRegisterDate]= useState("")
 console.log(registerData,"register")

 const register_data=async()=>{
  setRegisterDate( JSON.parse(await AsyncStorage.getItem('regi_user')) )
}
const login=async()=>{
    if(userDetails.username && userDetails.password){
      const findIndex=registerData.findIndex(item=>item.username==userDetails.username && item.password==userDetails.password ) 
     if(findIndex>-1){
      AsyncStorage.setItem("current_user",JSON.stringify(userDetails))
     
      route.params.isLogged(true)
     }else{
      alert("Username or Passsword Wrong")
     }
  }else{
    alert("Please fill all the fileds")
  } 
  }

  useEffect(()=>{
    register_data()
  },[])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Login Here !</Text>
        <View style={styles.inputView}>
        <TextInput

          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText= {(username=>setUserDetails({...userDetails,username}))}
          // onBlur={() => emailValidator()}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password=>setUserDetails({...userDetails,password}))}
          // onBlur={() => PassValidator()}
        /> 
      </View>  
      
      <TouchableOpacity  onPress={()=>login()} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
     <View style={{flexDirection:"row"}}>
     <Text style={styles.newuser_text}>New user </Text>
     <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
     <Text style={styles.signup_text}>Signup</Text>
     </TouchableOpacity>
     </View>
    
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize:30,
    fontStyle:"normal",
    marginBottom:20,
    color:'white',
  },
  inputView: {
    backgroundColor:"lightgrey",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  newuser_text:{
    fontSize:20,
    fontStyle:"normal",
    marginTop:20,
    color:'white',
    // marginEnd:
  },
  signup_text:{
    fontSize:20,
    fontStyle:"normal",
    marginTop:20,
    color:'white',
    
  },
  TextInput: {
    height: 10,
    flex: 1,
    padding: 5,
    fontSize:15
  },
  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
  },
});