import { Dropdown } from 'react-native-element-dropdown';
import { View,StyleSheet } from 'react-native';
import { useState } from 'react';


export default  function DropdownScreen(){

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

    return(
       <View>
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
    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      placeholderStyle: {
        fontSize: 15,
        color:"white"
      },
      selectedTextStyle: {
        fontSize: 16,
        color:"white"
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      }
})