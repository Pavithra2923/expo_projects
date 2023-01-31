import { Button,Text,View } from 'react-native';


export  const Searchsreeen = ({navigation,route}) => { 
    return (
        <View style={{alignItems:"center",flex: 1,
        justifyContent: 'center',}} >
            <Text>Welcome to Search Screen</Text>
            <Button title='Go-to Profile-Screen' onPress={()=>navigation.navigate("Profile")}/>
        </View>
    )
  };

