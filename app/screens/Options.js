import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Platform, Linking } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 24;

class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };
    handlePressThemes = () => {
        this.props.navigation.navigate('Themes', { title: 'Themes' });
    }
    handlePressSite = () => {
        Linking.openURL('http://fixer.io').catch(() =>  this.props.alertWithType('info', 'Sorry!', "Fixer.io can't be opened right now."),);
    }
    render() {
        return (
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem
                    text={"Themes"}
                    onPress={() => this.handlePressThemes()}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />}
                />
                <Separator />
                <ListItem
                    text={"Fixer.io"}
                    onPress={this.handlePressSite}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
                />
                <Separator />
            </ScrollView>
        );
    }
}
export default connectAlert(Options);