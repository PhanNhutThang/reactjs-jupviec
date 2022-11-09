import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo.png';
// import HomePage from './HomePage/HomePage.js';
import {
    Link
} from "react-router-dom";
import close from '../../assets/images/close.png';
import android from '../../assets/images/android.png';
import appstore from '../../assets/images/appstore.png';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// class ServiceOne extends React.Component {

//     render() {
Modal.setAppElement('#root')
function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <div className='home-header'>
                <div className='home-header-one'>GIỚI THIỆU</div>
                <div className='home-header-two'><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>TẢI ỨNG DỤNG</Link></div>
            </div>
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>

                        <div className='header-logo'>
                            <Link to="/">
                                <img src={logo} style={{ width: '100%', height: '100%' }} />
                            </Link></div>


                    </div>
                    <div className='center-content'>
                        <DropdownButton id="dropdown-basic-button" variant="light" title="Dịch vụ cung cấp" >
                            <Dropdown.Item >
                                <Link to="/dich-vu-ve-sinh-sofa" style={{ color: 'black', textDecoration: 'none' }}>
                                    <b>Dịch vụ vệ sinh sofa</b>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dich-vu-ve-sinh-nha" style={{ color: 'black', textDecoration: 'none' }}>
                                    <b>Dịch vụ vệ sinh nhà</b>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dich-vu-tong-ve-sinh" style={{ color: 'black', textDecoration: 'none' }}>
                                    <b>Dịch vụ tổng vệ sinh</b>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dich-vu-ve-sinh-vn-phong" style={{ color: 'black', textDecoration: 'none' }}>
                                    <b>Dịch vụ vệ sinh văn phòng</b>
                                </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                        <div>
                            <Link to="/tin-tuc" style={{ color: 'black', textDecoration: 'none' }}>
                                <b>Tin tức</b>
                            </Link>
                        </div>
                        <div>
                            <Link to="/tuyen-dung" style={{ color: 'black', textDecoration: 'none' }}>
                                <b>Tuyển dụng</b>
                            </Link>
                        </div>
                        <div>
                            <Link to="/cam-ket-cua-jupviec" style={{ color: 'black', textDecoration: 'none' }}>
                                <b>Cam kết của JupViec</b>
                            </Link>
                        </div>
                    </div>
                    <div className='right-content'>
                        {/* <Button className='primary' variant="primary">Đặt dịch vụ ngay</Button> */}
                        <Button onClick={() => setModalIsOpen(true)} className='primary' variant="primary">Đặt dịch vụ ngay</Button>
                        <Modal
                            isOpen={modalIsOpen}
                            shouldCloseOnOverlayClick={false}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    background: 'none',
                                    overflowY: 'hidden',
                                    height: '100%',
                                    width: '100%',
                                    margin: 'auto',
                                },
                                content: {
                                    color: 'black',
                                    background: 'papayawhip',
                                    height: '30%',
                                    width: '30%',
                                    margin: 'auto'
                                }
                            }}
                        >
                            <Button
                                style={{ marginLeft: '90%', background: 'none', marginTop: '-2%' }}
                                onClick={() => setModalIsOpen(false)}>
                                <img src={close} style={{ width: '100%', height: '100%', background: 'none', marginTop: '-2%' }} />
                            </Button>
                            <div style={{ fontSize: '19px', textAlign: 'center', marginTop: '-5%', marginLeft: '1%' }}>Tải và trải nghiệm ứng dụng tại đây</div>
                            <div style={{ display: 'flex', marginTop: '5%', marginLeft: '8%' }}>
                                <div>
                                    <a href='https://play.google.com/store/games'> <img src={android} style={{ width: '80%', height: '80%', cursor: 'pointer' }} /></a>
                                </div>
                                <div>
                                    <a href='https://www.apple.com/app-store/'><img src={appstore} style={{ width: '80%', height: '80%', cursor: 'pointer' }} /></a>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}
//}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

// export default function HomeHeader() {
//     const [modal, setModal] = useState(false);
//     const toggleModal = () => {
//         setModal(!modal);
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(Header);