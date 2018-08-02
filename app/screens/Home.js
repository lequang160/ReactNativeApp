import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();



class Home extends Component {

  static propTypes = {
    navigation: PropTypes.object,

  };
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }
  handlePressQUOTECurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }
  handleTextChane = (text) => {
    console.log("Text change : " + text);
  }
  handleSwapCurrency = () => {
    console.log('press swap currency');
  }
  handlePressOptions = () => {
    this.props.navigation.navigate('Options', { title: 'Options' });
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content'></StatusBar>
        <Header
          onPress={this.handlePressOptions}
        />
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType='numeric'
            onChangeText={this.handleTextChane}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQUOTECurrency}
            defaultValue={TEMP_QUOTE_PRICE}
            editable={false}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
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
export default Home;