import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton = (props)  => {
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier,
      );
    
      const containerStyles = [styles.container];
      if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
      }
    return (
    <View style= {styles.container}>
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.buttonContainer}
            underlayColor={underlayColor}
        >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableHighlight>
        <View style= {styles.border}/>
        <TextInput style = {styles.input} underlineColorAndroid="transparent" {...props} />
        
    </View>

)};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;