import { useState , useEffect } from 'react';
import { Button,Text,View,StyleSheet,TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from './Login';


export  const SignupScreen = ({navigation}) => { 

    const [signUp,setSignUp] = useState({
        username:'',
        email:'',
        password:'',
        address:'',
    })
    console.log(signUp,"signup")
    
    const [selectedDate, setSelectedDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setSelectedDate(date);
      hideDatePicker();
    };  

    const dropdown_data=[
        {
           label: "qualification",value:""
        },
        {
       label:"UG",value:"UG"
    },
    {
       label:"PG",value:"PG"
    },
    {
       label:"Ph.D",value:"Ph.D"
    },]
    const [value, setValue] = useState(null);

    const signup_submit=async()=>{
       const list=await AsyncStorage.getItem("regi_user") ? 
       JSON.parse(await AsyncStorage.getItem("regi_user")):[]
       list.push(signUp)
      await AsyncStorage.setItem("regi_user",JSON.stringify(list))
        Alert.alert("Registered Successfully")
       
        setSignUp("")
        setSelectedDate("")
        setValue(null)
    }
 useEffect(() => {
 const getItems =async ()=>{
  const lists=JSON.parse(await AsyncStorage.getItem("regi_user"))
//  AsyncStorage.removeItem('regi_user')
//   console.log('lists', lists)
 }
  getItems()
 }, [])
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registration</Text>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="User Name"
                        placeholderTextColor={ 'white' }
                        style={styles.textInput}
                        value={signUp.username}
                        onChangeText={(username=>setSignUp({...signUp,username}))}
                    />
                    {/* {console.log("value_",value)} */}

                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={ 'white' }
                        style={styles.textInput}
                        value={signUp.email}
                        onChangeText={(email=>setSignUp({...signUp,email}))}
                    />
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={ 'white' }
                        style={styles.textInput}
                        secureTextEntry={true}
                        value={signUp.password}
                        onChangeText={(password=>setSignUp({...signUp,password}))}
                    />

                </View>

                <View style={styles.inputTextWrapper}>
                    <View style={{flexDirection:"row"}}>
                        <TextInput 
                            placeholder={selectedDate? moment(selectedDate).format("DD/MM/YYYY"):"Please select date"}
                            placeholderTextColor={ 'white' }
                            style={styles.textInput}
                        />
                        { ! selectedDate && <Icon name='md-calendar' color="white" size={26} onPress={showDatePicker} />}                 
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                 </View>

                    <View style={styles.inputTextWrapper}>
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={dropdown_data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Qualificaion"
                            placeholderTextColor="white"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                            setValue(item.value);
                            }}
                        />
                   </View>

                    <View style={styles.inputTextWrapper}>
                        <TextInput
                            placeholder="Address"
                            placeholderTextColor={ 'white' }
                            style={styles.textInput}
                            value={signUp.address}
                            onChangeText={(address=>setSignUp({...signUp,address}))}
                        />
                    </View>
    
                    <View style={styles.SignupBtn}>
                     <TouchableOpacity onPress={()=>{signup_submit()}}>
                        <Text>Submit</Text>
                     </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row"}}>
     <Text style={styles.newuser_text}>Existing user </Text>
     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
     <Text style={styles.signup_text}>Login</Text>
     </TouchableOpacity>
     </View>
    
                </View>
        
          );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
      backgroundColor:"black"
    },
    header: {
      fontSize: 36,
      padding: 24,
      margin: 12,
      textAlign: "center",
      color:"white"
    },
    inputTextWrapper: {
      marginBottom: 20,
    },
    textInput: {
      height: 40,
      borderColor: "white",
      borderBottomWidth: 1,
      paddingRight: 30,
      color:"white"
    },
    
    SignupBtn: {
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "skyblue",
      },
      datePickerStyle: {
        width: 230,
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        color:"white"
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
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
  });