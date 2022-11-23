import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
//import Login from '../routes/Login';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';
import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import HomePage from './HomePage/HomePage.js';
import ServiceOne from './HomePage/ServiceOne.js';
import ServiceTwo from './HomePage/ServiceTwo.js';
import ServiceThree from './HomePage/ServiceThree.js';
import ServiceFour from './HomePage/ServiceFour.js';
import CustomScrollbars from '../components/CustomScrollbars';
import News from './HomePage/news.js';
import Commit from './HomePage/Commit';
import Recruit from './HomePage/Recruit';
import NewOne from './HomePage/NewsOne.js';
import NewTwo from './HomePage/NewsTwo';
import NewThree from './HomePage/NewsThree';
import NewsFour from './HomePage/NewsFour';
import NewFive from './HomePage/NewsFive.js';
import NewSix from './HomePage/NewsSix.js';
import GioiThieu from './HomePage/Gioithieu.js';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            // <Fragment>
            //     <Router history={history}>
            //         <div className="main-container">
            //             <ConfirmModal />
            //             {this.props.isLoggedIn && <Header />}

            //             <div className="content-container">
            //                 <CustomScrollbars style={{ height: '100vh', width: '100%'}}>
            //                     <Switch>
            //                         <Route path={path.HOME} exact component={(Home)} />
            //                         <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
            //                         <Route path={path.SYSTEM} component={userIsNotAuthenticated(System)} />
            //                         <Route path={path.HOMEPAGE} component={HomePage} />
            //                          <Route path="/dich-vu-ve-sinh-sofa"><ServiceOne /></Route>

            //                     </Switch>
            //                 </CustomScrollbars>
            //             </div>

            //             <ToastContainer
            //                 className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
            //                 autoClose={false} hideProgressBar={true} pauseOnHover={false}
            //                 pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
            //                 closeButton={<CustomToastCloseButton />}
            //             />
            //         </div>
            //     </Router>
            // </Fragment>
            <BrowserRouter>
                <div className="main-container">
                    <ConfirmModal />
                    {/* {this.props.isLoggedIn && <Header />} */}

                    <div className="content-container">
                        <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                <Route path={path.HOMEPAGE} component={HomePage} />
                                <Route path="/dich-vu-ve-sinh-sofa"><ServiceOne /></Route>
                                <Route path="/dich-vu-ve-sinh-nha"><ServiceTwo /></Route>
                                <Route path="/dich-vu-tong-ve-sinh"><ServiceThree /></Route>
                                <Route path="/dich-vu-ve-sinh-vn-phong"><ServiceFour /></Route>
                                <Route path="/tin-tuc"><News /></Route>
                                <Route path="/tuyen-dung"><Recruit /></Route>
                                <Route path="/cam-ket-cua-jupviec"><Commit /></Route>
                                <Route path="/."><HomePage /></Route>
                                <Route path="/cap-nhat-ctkm-12"><NewOne /></Route>
                                <Route path="/nhung-mon-an-ngon"><NewTwo /></Route>
                                <Route path="/meo-can-bang-cong-viec"><NewThree /></Route>
                                <Route path="/le-hoi-halloween"><NewsFour /></Route>
                                <Route path="/phong-cach-thiet-ke-noi-that"><NewFive /></Route>
                                <Route path="/phong-cach-an-mac-cuc-dep"><NewSix /></Route>
                                <Route path="/gioi-thieu"><GioiThieu /></Route>
                            </Switch>
                        </CustomScrollbars>
                    </div>


                    <ToastContainer
                        position='bottom-right'
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);