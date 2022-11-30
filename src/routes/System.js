import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import ProductManage from '../containers/System/ProductManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import ServiceManage from '../containers/System/ServiceManage';
import StaffManage from '../containers/System/StaffManage';
import ClientManage from '../containers/System/ClientManage';
import ServiceContractManage from '../containers/System/ServiceContractManage';
import ReportStatistics from '../containers/System/ReportStatistics';
import Header from '../containers/Header/Header';


class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {this.props.isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/product-manage" component={ProductManage} />
                            <Route path="/system/register-package-group-or-account" component={RegisterPackageGroupOrAcc} />
                            <Route path="/system/manage-services" component={ServiceManage} />
                            <Route path="/system/staff-manage" component={StaffManage} />
                            <Route path="/system/manage-client" component={ClientManage} />
                            <Route path="/system/manage-contracts" component={ServiceContractManage} />
                            <Route path="/system/statistical-report" component={ReportStatistics} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
