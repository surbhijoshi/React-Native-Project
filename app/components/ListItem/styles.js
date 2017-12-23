import EStylesheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 4;

const styles = EStylesheet.create({
    $underlayColor: '$white',
 
    container:{
        //marginVertical: 80,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        height: INPUT_HEIGHT,
        paddingLeft:20,
        borderRadius: BORDER_RADIUS,
        backgroundColor:'$white'
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 30,
        paddingHorizontal: 16,
        color: '$primaryBlue',
        height:INPUT_HEIGHT
    },
    input: {
        flex: 1,
        height: INPUT_HEIGHT,
        borderTopRightRadius: BORDER_RADIUS,
        paddingHorizontal: 8,
        
        fontSize: 18,
    },
    strikeText: {
        flex: 1,
        height: INPUT_HEIGHT,
        borderTopRightRadius: BORDER_RADIUS,
        paddingHorizontal: 8,
        
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid', 
       
    },
    separator: {
     
        backgroundColor: '$border',
      
        height: StyleSheet.hairlineWidth
    },
});

export default styles;