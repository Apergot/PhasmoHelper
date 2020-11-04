import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native'

import { testRedux } from '../actions/testActions';

class Test extends Component {

    componentDidMount() {
        this.props.testRedux();
    }

    render () {
        return (
            <Text>{this.props.word}</Text>
        );
    }
}

const mapStateToProps = state => ({
    word: state.word.result
});

export default connect(mapStateToProps, {testRedux})(Test)