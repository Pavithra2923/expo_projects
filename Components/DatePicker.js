import { View,StyleSheet,TextInput } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

export default function DatePicker(){
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


    return(
        <View>
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
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: "white",
        borderBottomWidth: 1,
        paddingRight: 30,
        color:"white"
      },
})