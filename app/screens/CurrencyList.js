import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import PropTypes from 'prop-types';
import {changeBaseCurrency, changeQuoteCurrency} from '../components/actions/currencies';
import {connect} from 'react-redux';


class CurrencyList extends Component {
    static propTypes = {
        navigation : PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
        data: PropTypes.array,

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
        let comparsionCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type === 'quote')
            comparsionCurrency = this.props.quoteCurrency;

        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => (<ListItem 
                        text = {item}
                        onPress = {() => this.onHandlePress(item)}
                        selected = {item === comparsionCurrency}
                        iconBackground = {this.props.primaryColor}
                    />)}
                    keyExtractor={item => item}
                    ItemSeparatorComponent = {Separator}
                />
            </View>
        );

    }
}
const mapStateToProp = (state) =>
{
    let data = [];
    let rates = state.currencies.conversions[state.currencies.baseCurrency].rates;

    for(x in rates)
    {
        data.push(x);
    }

    return {
        baseCurrency : state.currencies.baseCurrency,
        quoteCurrency : state.currencies.quoteCurrency,
        primaryColor : state.theme.primaryColor,
        data : data,
    };

};




export default connect(mapStateToProp)(CurrencyList) ;