import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigator  from './config/routes';
import {AlertProvider} from './components/Alert';


EStyleSheet.build({
  $primaryBlue:'#4F6D7A',
  $white : '#ffffff',
  $border: '#E2E2E2',
  $inputText:'#797979',
  $lightGray:'#F0F0F0',
  $darkText: '#343434',
  $primaryGreen: '#D57A66',
  $primaryOrange: '#00BD9D',
  $primaryPurple:'#9E768F' , 
});
export default () => <AlertProvider><Navigator /></AlertProvider>;


