import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Comp extends Component{
    componentWillMount(){
        this.props.test_action('harry potters');
    }
    render(){
        return(
            <p>{this.props.data}</p>
        )
    }
}


function mapStateToProps(state) {
    return { data: state.data };
}

export default connect(mapStateToProps, actions)(Comp)