import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {View} from 'react-native';

const ListContainer= ({children}) => (
   
   <View style={styles.listContainer}>
      {children}
    </View>
   
);
ListContainer.propTypes={
    children:PropTypes.any
};
export default ListContainer;

