import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const Container = ({ children, backgroundColor }) => {
    let styleContainer = [ styles.container];
    if(backgroundColor)
        styleContainer.push({backgroundColor});
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styleContainer}>
                {children}
            </View>
        </TouchableWithoutFeedback>
        );
};


Container.propTypes = {
    children: PropTypes.any,
};
export default Container;