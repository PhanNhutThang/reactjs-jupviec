import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import operator from '../../assets/images/operator.png';
import service from '../../assets/images/service.jpg';
import smartphone from '../../assets/images/smartphone.jpg';
import congviec1 from '../../assets/images/congviec1.jpg';
import congviec2 from '../../assets/images/congviec2.jfif';
import congviec3 from '../../assets/images/congviec3.jpg';
import logo from '../../assets/images/logo.png';
import close from '../../assets/images/close.png';
import android from '../../assets/images/android.png';
import appstore from '../../assets/images/appstore.png';
//import clock from '../../assets/images/clock.png';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import {
    Link
} from "react-router-dom";
// <<<<<<< HEAD
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// class HomeHeader extends Component {
Modal.setAppElement('#root')
function HomeHeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // console.log('check userinfo: ', this.props.userInfo)
    // render() {
    return (
        <>

            <div className='home-header'>
                <div className='home-header-one'>
                    <Link to="/gioi-thieu" style={{ color: 'black', textDecoration: 'none' }}>GIỚI THIỆU
                    </Link>
                </div>
                <div className='home-header-two'>TẢI ỨNG DỤNG</div>
            </div>
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='header-logo'>
                            <img src={logo} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div className='center-content'>
                        <DropdownButton id="dropdown-basic-button" variant="light" border='none' title="Dịch vụ cung cấp" >
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
                    {/* =======

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className='home-header'>
                    <div className='home-header-one'>
                        <Link to="/gioi-thieu" style={{ color: 'black', textDecoration: 'none' }}>
                            <a>GIỚI THIỆU</a>
                        </Link>
                    </div>
                    <div className='home-header-two'>TẢI ỨNG DỤNG</div>
// >>>>>>> 62f38491a0a832c8aa81b148bb594e15c3763b5f */}
                </div>
                <div className='home-header-banner'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://jupviec-pub-assets.s3.ap-southeast-1.amazonaws.com/chaosan_2_02_01ddaf8bdd.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://jupviec-pub-assets.s3.ap-southeast-1.amazonaws.com/halloween_cover_7ee559ad85.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://jupviec-pub-assets.s3.ap-southeast-1.amazonaws.com/kmt10_cover_2_2d7da7b978.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='home-header-placeholder'>
                    <div className='icon-child-one'>
                        <div className='icon-operator'><img src={operator} style={{ width: '100px', height: '100px' }} /></div>
                        <div className='text-child-one'><b>Chuyên nghiệp - Tận tâm</b></div>
                        <div className='text-child-one'>Đội ngũ Tư vấn viên & Chăm sóc Khách hàng kinh nghiệm, chuyên nghiệp, tận tâm. JupViec cam kết bảo hành dịch vụ khi Khách hàng chưa hài lòng.</div>
                    </div>
                    <div className='icon-child-two'>
                        <div className='icon-operator'><img src={smartphone} style={{ width: '100px', height: '100px' }} /></div>
                        <div className='text-child-two'><b>Ứng dụng JupViec tiện lợi</b></div>
                        <div className='text-child-two'>Tìm Người giúp việc nhà nhanh chóng qua vài thao tác. Ứng dụng cung cấp đầy đủ thông tin về dịch vụ và Người giúp việc, tiện lợi trong việc chủ động lựa chọn và đánh giá.</div>
                    </div>
                    <div className='icon-child-three'>
                        <div className='icon-operator'><img src={service} style={{ width: '100px', height: '100px' }} /></div>
                        <div className='text-child-three'><b>Người giúp việc nhà tiêu chuẩn</b></div>
                        <div className='text-child-three'>Người giúp việc nhà tiêu chuẩn, đáng tin cậy, có đầy đủ hồ sơ. Công ty JupViec chịu trách nhiệm tuyển chọn, đào tạo và quản lý.</div>
                    </div>
                </div>
                <div className='home-header-conent-1'>
                    <div className='home-header-conent-down'>
                        <b>Dịch vụ của chúng tôi</b>
                    </div>
                    <div className='home-header-content-1-1'>
                        <div className='home-header-content-1a'>
                            <div className='home-header-content-1a-1'>
                                <img src={congviec1} style={{ width: '100%', height: '100%', marginTop: '8%' }} />
                            </div>
                            <div className='home-header-content-1a-2'>
                                {/* <img src={clock} style={{width: '100%', height:'100%', marginTop:'5%',marginLeft:'480%'}}/> */}
                            </div>
                            <div className='home-header-content-1a-3'>
                                <b>Giúp việc theo giờ</b>
                            </div>
                            <div className='home-header-content-1a-4'>
                                Giúp việc nhà theo giờ làm theo khung giờ Khách hàng đăng ký khi phát sinh nhu cầu. Công việc gồm: Dọn nhà, nấu ăn, rửa bát và hỗ trợ chăm sóc trẻ.
                            </div>
                            <div className='home-header-content-1a-5'>
                                <Button className='primary' variant="primary">Đặt dịch vụ ngay</Button>
                            </div>
                        </div>
                        <div className='home-header-content-2b'>

                        </div>
                        <div className='home-header-content-3c'>
                            <div className='home-header-content-1a-1'>
                                <img src={congviec2} style={{ width: '100%', height: '100%', marginTop: '8%' }} />
                            </div>
                            <div className='home-header-content-1a-2'>

                            </div>
                            <div className='home-header-content-1a-3'>
                                <b>Giúp việc sáng đến tối về</b>
                            </div>
                            <div className='home-header-content-1a-4'>

                                Giúp việc nhà sáng đến tồi về làm việc 8 - 9 tiếng tại nhà Khách hàng (không ở lại) vào những ngày và khung giờ Khách hàng đăng ký. Công việc gồm: Dọn nhà, nấu ăn, rửa bát và một số yêu cầu khác nếu phát sinh.
                            </div>
                            <div className='home-header-content-1a-5'>
                                <Button className='primary' variant="primary">Đặt dịch vụ ngay</Button>
                            </div>
                        </div>
                        <div className='home-header-content-4d'>

                        </div>
                        <div className='home-header-content-5e'>
                            <div className='home-header-content-1a-1'>
                                <img src={congviec3} style={{ width: '100%', height: '100%', marginTop: '8%' }} />
                            </div>
                            <div className='home-header-content-1a-2'>

                            </div>
                            <div className='home-header-content-1a-3'>
                                <b>Giúp việc theo định kỳ</b>
                            </div>
                            <div className='home-header-content-1a-4'>
                                Giúp việc định kỳ là giúp việc 1 buổi/tuần, 2 buổi/tuần hoặc 3 buổi/tuần do khách hàng lựa chọn gói dịch vụ và giá sẽ khác nhau. Cố định 1 nhân viên giúp việc.
                            </div>
                            <div className='home-header-content-1a-5'>
                                <Button className='primary' variant="primary">Đặt dịch vụ ngay</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <About />
                <HomeFooter />

            </div >
        </>
    );
}
// }

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

