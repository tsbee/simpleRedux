import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import {connect} from 'react-redux';

import {changeButtonTitle} from '../actions';

class HomeForm extends React.Component {

    constructor() {
        super();
        this.onPress = this.onPress.bind(this);
    }
    onPress() {
        //this.refs.toast.show("Hello World");
        this.refs.toast.show('hello world!');
        this.props.changeButtonTitle();
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>{this.props.appData.button_title}</Text>
                </TouchableOpacity>
                <Toast ref="toast"/>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        appData:state.appData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeButtonTitle: ()=>dispatch(changeButtonTitle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm)


