import { Button,Text,View } from 'react-native';

export  const Settingscreen = ({navigation,route}) => { 
    return (
        <View style={{alignItems:"center",flex: 1,  justifyContent: 'center',}} >
            <Text>Welcome to Settings Screen</Text>
            <Button title='Go-to Home-Screen' onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
  };