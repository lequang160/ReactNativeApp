import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import PropTypes from 'prop-types';
import {changeBaseCurrency, changeQuoteCurrency} from '../components/actions/currencies';
import {connect} from 'react-redux';

import currencies from '../components/data/currencies'

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = {
        navigation : PropTypes.object,
        dispatch: PropTypes.func,
    };

    onHandlePress = (currency) =>
    {
        const { type } = this.props.navigation.state.params;

        if(type === 'base')
        {
            this.props.dispatch(changeBaseCurrency(currency));
            this.props.navigation.goBack(null);
        }else if (type === 'quote'){
            this.props.dispatch(changeQuoteCurrency(currency));
            this.props.navigation.goBack(null);
        }
        
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (<ListItem 
                        text = {item}
                        onPress = {() => this.onHandlePress(item)}
                        selected = {item === TEMP_CURRENT_CURRENCY}
                       
                    />)}
                    keyExtractor={item => item}
                    ItemSeparatorComponent = {Separator}
                />
            </View>
        );

    }
}


export default connect()(CurrencyList) ;