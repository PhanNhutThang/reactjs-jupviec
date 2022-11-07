import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Share/Header.js';
import HomeFooter from './HomeFooter';


class NewsTwo extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsTwo);