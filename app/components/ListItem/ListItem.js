import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight,TextInput } from 'react-native';
import styles from './styles';
import CheckBox from 'react-native-check-box'


const ListItem = ({onPress,selected=false}) => {
    var inputStyles=[styles.input];
    if(selected===true){
       
        inputStyles=[styles.strikeText];
        console.log('selected',inputStyles);
    }
    return(
    <View style={styles.container} >
    {/* <TouchableHighlight   underlayColor={styles.underlayColor}  > */}
    
    <CheckBox onClick={onPress} value={selected}/>
       
    
    {/* </TouchableHighlight> */}
    {/* <Text style={styles.buttonText} >{selected}</Text>  */}
            <TextInput style={inputStyles}/>
           
    </View>
    );
};

ListItem.propTypes = {
    onPress: PropTypes.func,
    // onChangeText:PropTypes.func,
    // buttonText: PropTypes.string,
     selected: PropTypes.bool,
     textDecorationLine:PropTypes.string,
     textDecorationStyle:PropTypes.string
   // checkmark: PropTypes.bool,
   // visible: PropTypes.bool,
  //  customIcon:PropTypes.element,
  //  iconBackground:PropTypes.string
}
export default ListItem;