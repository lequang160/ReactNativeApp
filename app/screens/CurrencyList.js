import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import PropTypes from 'prop-types';

import currencies from '../components/data/currencies'

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = {
        navigation : PropTypes.object,
    };

    onHandlePress = () =>
    {
        console.log('press on Item');
        this.props.navigation.goBack(null);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (<ListItem 
                        text = {item}
                        onPress = {this.onHandlePress}
                        selected = {item === TEMP_CURRENT_CURRENCY}
                       
                    />)}
                    keyExtractor={item => item}
                    ItemSeparatorComponent = {Separator}
                />
            </View>
        );

    }
}


export default CurrencyList;