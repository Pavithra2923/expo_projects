import { Button,Text,View } from 'react-native';


export  const Profilescreen = ({navigation,route}) => { 
    return (
        <View style={{alignItems:"center",flex: 1,  justifyContent: 'center',}} >
            <Text>Welcome to Profile Screen</Text>
            <Button title='Go-to Settings_screen' onPress={()=>navigation.navigate("Settings")}/>
            
        </View>
    )
  };