import { Button,Text,View } from 'react-native';

export const Homescreen = ({navigation,route}) => {
    console.log("navigation",navigation)
    return (
        <>
        <View style={{alignItems:"center",flex: 1,  justifyContent: 'center',}} >
            <Text>Welcome to Home Screen</Text>
            <Button title='Go-to Search-Screen' onPress={()=>navigation.navigate("Search")}/>
        </View>
      
        </>
        
    );
  };
  

