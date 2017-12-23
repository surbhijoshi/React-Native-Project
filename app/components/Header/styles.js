 import EStyleSheet from 'react-native-extended-stylesheet';
 import { width, height, totalSize } from 'react-native-dimension';
 const INPUT_HEIGHT = 40;
const styles = EStyleSheet.create({
    header:{
       backgroundColor:'#345453',
        position:'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:height(10),
       //alignSelf:'flex-start',
       flex:1,
       flexDirection: 'column',
        
    },
      text: {
            color: '$white',
           fontSize: 22,
            letterSpacing: -0.5,
            marginTop:20,
            marginLeft:10,
           fontWeight: '300',
         },
         buttonText: {
       
           alignSelf: 'flex-end',
         //    paddingVertical: 15,
             position:'absolute',
             paddingRight:15
                  
      },
});
export default styles;


