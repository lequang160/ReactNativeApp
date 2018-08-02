import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../components/actions/currencies';
import {connect} from 'react-redux';

const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();



class Home extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency : PropTypes.string,
    amount: PropTypes.number,
    conversionRate : PropTypes.number,
    lastDateUpdate: PropTypes.object,

  };
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type : 'base' });
  }
  handlePressQUOTECurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency',type : 'quote'  });
  }
  handleTextChange = (amount) => {
    // TODO: dsadasd
    this.props.dispatch(changeCurrencyAmount(amount));
  }
  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  }
  handlePressOptions = () => {
    this.props.navigation.navigate('Options', { title: 'Options' });
  }

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content'></StatusBar>
        <Header
          onPress={this.handlePressOptions}
        />
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType='numeric'
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQUOTECurrency}
            defaultValue={quotePrice.toString()}
            editable={false}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
            date={this.props.lastDateUpdate}
          />
          <ClearButton
            text='Reverse Currencies'
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
const mapStateToProps = (state) =>{
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const lastDateUpdate = conversionSelector.date ? new Date(conversionSelector.date) : new Date();
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate : rates[quoteCurrency] || 0,
    lastDateUpdate : lastDateUpdate,

  };
};


export default connect(mapStateToProps)(Home);