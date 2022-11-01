import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import operator from '../../assets/images/operator.png';
import service from '../../assets/images/service.jpg';
import smartphone from '../../assets/images/smartphone.jpg';

class HomeHeader extends Component {

    render() {
        return (
            <>
            <div className='home-header'>
                <div className='home-header-one'>GIỚI THIỆU</div>
                <div className='home-header-two'>TẢI ỨNG DỤNG</div>
            </div>
            <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                        <DropdownButton id="dropdown-basic-button" variant="light" border='none' title="Dịch vụ cung cấp" >
                            <Dropdown.Item href="#/action-1"><b>Dịch vụ vệ sinh sofa</b></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><b>Dịch vụ vệ sinh nhà</b></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><b>Dịch vụ tổng vệ sinh</b></Dropdown.Item>
                            <Dropdown.Item href="#/action-4"><b>Dịch vụ vệ sinh văn phòng</b></Dropdown.Item>
                        </DropdownButton>
                            <div><b>Tin tức</b></div>
                            <div><b>Tuyển dụng</b></div>
                            <div><b>Cam kết của JupViec</b></div>
                        </div>
                        <div className='right-content'>
                            <Button variant="primary">Đặt dịch vụ ngay</Button>
                        </div>
                      
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
                           <img src={operator} style={{width: '100px', height:'100px'}}/>
                           <div className='text-child-one'><b>Chuyên nghiệp - Tận tâm</b></div>
                           <div className='text-child-one'>Đội ngũ Tư vấn viên & Chăm sóc Khách hàng kinh nghiệm, chuyên nghiệp, tận tâm. JupViec cam kết bảo hành dịch vụ khi Khách hàng chưa hài lòng.</div>
                        </div>
                        <div className='icon-child-two'>
                           <img src={smartphone} style={{width: '100px', height:'100px'}}/>
                           <div className='text-child-two'><b>Ứng dụng JupViec tiện lợi</b></div>
                           <div className='text-child-two'>Tìm Người giúp việc nhà nhanh chóng qua vài thao tác. Ứng dụng cung cấp đầy đủ thông tin về dịch vụ và Người giúp việc, tiện lợi trong việc chủ động lựa chọn và đánh giá.</div>
                        </div>
                        <div className='icon-child-three'>
                           <img src={service} style={{width: '100px', height:'100px' }}/>
                           <div className='text-child-three'><b>Người giúp việc nhà tiêu chuẩn</b></div>
                           <div className='text-child-three'>Người giúp việc nhà tiêu chuẩn, đáng tin cậy, có đầy đủ hồ sơ. Công ty JupViec chịu trách nhiệm tuyển chọn, đào tạo và quản lý.</div>
                        </div>
                    </div>
                <div className='home-header-conent-1'>
                    <div className='home-header-conent-down'>
                        
                    </div>
                    <div className='home-header-content-1-1'>

                        <div className='home-header-content-1a'>
                            <div className='home-header-content-1a-1'></div>
                            <div className='home-header-content-1a-2'></div>
                            <div className='home-header-content-1a-3'></div>
                            <div className='home-header-content-1a-4'></div>
                            <div className='home-header-content-1a-5'></div>
                        </div>
                        <div className='home-header-content-2b'>
                            
                        </div>
                        <div className='home-header-content-3c'>
                            <div className='home-header-content-3c-1'></div>
                            <div className='home-header-content-3c-2'></div>
                            <div className='home-header-content-3c-3'></div>
                            <div className='home-header-content-3c-4'></div>
                            <div className='home-header-content-3c-5'></div>
                        </div>
                        <div className='home-header-content-4d'>
                            
                        </div>
                        <div className='home-header-content-5e'>
                            <div className='home-header-content-5e-1'></div>
                            <div className='home-header-content-5e-2'></div>
                            <div className='home-header-content-5e-3'></div>
                            <div className='home-header-content-5e-4'></div>
                            <div className='home-header-content-5e-5'></div>
                        </div>
                    </div>
                   
                    



                
            </div>
            <div className='test'></div>
            </div>
            </>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

