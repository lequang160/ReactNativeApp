import React, { Component } from 'react';
import { ScrollView, StatusBar,StyleSheet } from 'react-native';
import { ListItem, Separator } from '../components/List';
import EStyleSheets from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const styles =  EStyleSheets.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});


class Themes extends Component {
   
    static propTypes = {
        navigation : PropTypes.object,
    };

    handleItemThemes= (color) =>{
        this.props.navigation.goBack(null);
    };


    render() {
        return (
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem
                    text={'Blue'}
                    selected
                    checkmark={false}

                    onPress = {()=>this.handleItemThemes(styles.$blue)}
                    iconBackground = {styles.$blue}
                />
                <Separator />
                <ListItem
                    text={'Green'}
                    selected
                    checkmark={false}

                    onPress = {()=>this.handleItemThemes(styles.$green)}
                    iconBackground = {styles.$green}
                />
                <Separator />
                <ListItem
                    text={'Orange'}
                    selected
                    checkmark={false}

                    onPress = {()=>this.handleItemThemes(styles.$orange)}
                    iconBackground = {styles.$orange}
                />
                <Separator />
                <ListItem
                    text={'Purple'}
                    selected
                    checkmark={false}

                    onPress = {()=>this.handleItemThemes(styles.$purple)}
                    iconBackground = {styles.$purple}
                />
                <Separator />
            
            </ScrollView>
        );
    }
}

export default Themes;