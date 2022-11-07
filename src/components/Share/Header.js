import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo.png';
// import HomePage from './HomePage/HomePage.js';
import {
    Link
} from "react-router-dom";

class ServiceOne extends React.Component {

    render() {
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
                            <Button className='primary' variant="primary">Đặt dịch vụ ngay</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ServiceOne;