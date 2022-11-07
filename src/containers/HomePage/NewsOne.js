import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Share/Header.js';
import HomeFooter from './HomeFooter';


class NewOne extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
                    <div>new one</div>
                    <div>new two</div>
                    <HomeFooter />
                </div>
            </>


        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOne);

