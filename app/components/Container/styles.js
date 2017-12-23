import EStyleSheet from 'react-native-extended-stylesheet';
import { width, height, totalSize } from 'react-native-dimension';

const listContainerPadding=height(10);
export default EStyleSheet.create({

  $listContainerPadding:listContainerPadding,
  container: {
    flex: 1,
   alignItems:'flex-start',
  //  justifyContent: 'center',
    backgroundColor: '$primaryBlue',
  },
  listContainer:{
    paddingTop:'$listContainerPadding',
    paddingLeft:10
  }
});