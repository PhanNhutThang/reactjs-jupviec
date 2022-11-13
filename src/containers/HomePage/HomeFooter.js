import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';
import bct from '../../assets/images/bct.png';
import feacebook from '../../assets/images/fb.jfif';
import zalo from '../../assets/images/zalo.png';

class HomeFooter extends Component {

    render() {
        return (
            <>
                <div className='section-header-logo'>
                    <div className='section-header-logo-conent'>
                        <div className='header-logo'></div>
                        <div className='section-name'><b>CÔNG TY CỔ PHẦN PHÁT TRIỂN VỆ SINH NHÀ SẠCH HCM </b></div>
                        <div className='section-phone'> Tổng đài Phản hồi Chất lượng: <b>1900 9999</b></div>
                        <div className='section-application'>
                            <div className='section-feacebook'>
                                <img src={feacebook} style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className='section-zalo'>
                                <img src={zalo} style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    </div>
                    <div className='section-address'>
                        <div className='section-address-one'>
                            <div className='font-size-header'><b>&#127974;  Văn phòng Hà Nội</b></div>
                            <div>&#10145; Quận Cầu Giấy, Thủ Đô Hà Nội</div>
                            <div className='font-size-header'><b>&#127974;  Văn phòng Đà Nẵng</b></div>
                            <div>&#10145; Quận Thanh Khê, Thành phố Đà Nẵng</div>
                            <div className='font-size-header'><b>&#127974;  Văn phòng Thừa Thiên Huế</b></div>
                            <div>&#10145; Quận Thuận An, Tỉnh Thừa Thiên Huế</div>
                        </div>

                    </div>
                    <div className='section-address'>
                        <div className='section-address-two'>
                            <div className='font-size-header'><b>&#127974;  Văn phòng Hồ Chí Minh</b></div>
                            <div>&#10145; Quận Bình Tân, Thành Phố Hồ Chí Minh</div>
                            <div className='font-size-header'><b>&#127974;  Văn phòng Cần Thơ</b></div>
                            <div>&#10145; Quận Ninh Kiều, Thành Phố Cần Thơ</div>
                            <div className='font-size-header'><b>&#127974;  Văn phòng Hải Phòng</b></div>
                            <div>&#10145; Quận Đồ Sơn, Thành Phố Hải Phòng </div>
                        </div>
                    </div>
                    <div className='section-menu'>
                        <div className='menu'>
                            <div className='font-size-header-menu'><b>&#x1F4A0; Menu</b></div>
                            <div>&#x1F538; Giới thiệu </div>
                            <div>&#x1F538; Quy trình </div>
                            <div>&#x1F538; Câu hỏi thường gặp </div>
                            <div>&#x1F538; Tuyển dụng </div>
                            <div>&#x1F538; Tin tức </div>
                            <div>&#x1F538; Liên hệ </div>
                        </div>
                    </div>
                </div>

                <div className='section-HomeFooter'>
                    <div className='section-copy'>
                        <p>&copy; 2022 Đề tài khoá luận: Xây dựng hệ thống phần mềm kết nối khách hàng và dịch vụ người giúp việc.</p>
                    </div>
                    <div className='section-bct'>
                        <img src={bct} style={{ width: '100%', height: '80%' }} />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);