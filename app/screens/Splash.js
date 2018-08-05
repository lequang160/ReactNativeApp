import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Logo} from '../components/Logo';
import { Container } from '../components/Container';
import PropTypes from 'prop-types';


class Splash extends Component {
    static props = {
        navigation : PropTypes.object,

    };
    constructor(props) {
        super(props);    
        setTimeout (() =>{
            this.props.navigation.navigate('Home');
        },2000);
    };
    componentWillUnmount(){
        
    };
    componentWillMount(){

    }
    render() {
        return (
            <Container>
                <Logo/>
            </Container>
        );
    }
};
export default Splash;