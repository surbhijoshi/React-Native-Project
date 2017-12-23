

import React from 'react';
import { View, Text,TouchableHighlight } from 'react-native';
import styles from './styles';


const Header = ({onPress}) => (
    <View style={styles.header}>
       <Text style={styles.text}>ToDoList</Text>
    <TouchableHighlight  style={styles.buttonText}>
       <Text style={styles.text} onPress={onPress}>+</Text>
       </TouchableHighlight>
    </View>

);
export default Header;