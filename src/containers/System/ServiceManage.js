import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ServiceManage extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Quản lý dịch vụ
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>

                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceManage);
