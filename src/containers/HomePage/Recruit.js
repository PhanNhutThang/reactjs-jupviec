import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Recruit.scss';
import HomeFooter from './HomeFooter';
import Header from '../../components/Share/Header.js';
import recruit from '../../assets/images/recruit.jpg';
import tuyendung from '../../assets/images/tuyendungContent.jpg';
import tuyendung1 from '../../assets/images/tuyendung01.jpg';
import tuyendung2 from '../../assets/images/tuyendung02.jpg';
import tuyendung3 from '../../assets/images/tuyendung03.jpg';
import tuyendung4 from '../../assets/images/tuyendung04.jpg';
import tuyendung5 from '../../assets/images/tuyendung05.jpg';
import {
    Link
} from "react-router-dom";

class Recruit extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div>
                    <img src={recruit} style={{ width: '100%', height: '30%', marginTop: '2%' }} />

                </div>
                <div className='home-header-container'>
                    <div className='text'>
                        <b>Thông tin tuyển dụng</b>
                    </div>
                    <div className='content'>
                        <div className='content-image'><Link to="/cap-nhat-ctkm-12">
                            <img src={tuyendung} style={{ width: '100%', height: '100%' }} /></Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/cap-nhat-ctkm-12" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>[HCM, HN] CƠ HỘI THỰC TẬP SINH CONTENT/CREATIVE</b></div>
                                <div className='content-text'>Hiện JupViec đang tìm kiếm những bạn trẻ gen Z năng động để thực hiện những hoạt động sáng tạo của công ty. Các bạn sẽ có trải nghiệm được làm trong môi trường chuyên nghiệp và thỏa sức bay bổng với những ý tưởng của mình.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>

                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/nhung-mon-an-ngon">
                                <img src={tuyendung1} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/nhung-mon-an-ngon" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>[HCM] TUYỂN DỤNG SALE ADMIN</b></div>
                                <div className='content-text'>JupViec.vn là nền tảng kết nối nhu cầu giữa người giúp việc và khách hàng thông qua ứng dụng điện thoại được đầu tư từ Quỹ CyberAgent Ventures của Nhật Bản và Quỹ Patamar Capital của Mỹ và mới đây nhất là STI Holding với chung mục tiêu tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/meo-can-bang-cong-viec">
                                <img src={tuyendung2} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/meo-can-bang-cong-viec" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>TUYỂN DỤNG VỊ TRÍ CHUYÊN VIÊN TUYỂN DỤNG</b></div>
                                <div className='content-text'>JupViec.vn là nền tảng kết nối nhu cầu giữa người giúp việc và khách hàng thông qua ứng dụng điện thoại được đầu tư từ Quỹ CyberAgent Ventures của Nhật Bản và Quỹ Patamar Capital của Mỹ và mới đây nhất là STI Holding với chung mục tiêu tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/le-hoi-halloween">
                                <img src={tuyendung3} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/le-hoi-halloween" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>Tuyển dụng vị trí: Chuyên Viên Tuyển Dụng (Mass)</b></div>
                                <div className='content-text'>JupViec.vn là nền tảng kết nối nhu cầu giữa người giúp việc và khách hàng thông qua ứng dụng điện thoại được đầu tư từ Quỹ CyberAgent Ventures của Nhật Bản và Quỹ Patamar Capital của Mỹ và mới đây nhất là STI Holding với chung mục tiêu tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/phong-cach-thiet-ke-noi-that">
                                <img src={tuyendung4} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/phong-cach-thiet-ke-noi-that" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>[HN,HCM] TUYỂN DỤNG CHUYÊN VIÊN TƯ VẤN KHÁCH HÀNG/KINH DOANH</b></div>
                                <div className='content-text'>JupViec.vn là nền tảng kết nối nhu cầu giữa người giúp việc và khách hàng thông qua ứng dụng điện thoại được đầu tư từ Quỹ CyberAgent Ventures của Nhật Bản và Quỹ Patamar Capital của Mỹ và mới đây nhất là STI Holding với chung mục tiêu tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/phong-cach-an-mac-cuc-dep">
                                <img src={tuyendung5} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/phong-cach-an-mac-cuc-dep" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>[HÀ NỘI/HỒ CHÍ MINH] TUYỂN DỤNG TRƯỞNG PHÒNG NHÂN SỰ</b></div>
                                <div className='content-text'>JupViec.vn là nền tảng kết nối nhu cầu giữa người giúp việc và khách hàng thông qua ứng dụng điện thoại được đầu tư từ Quỹ CyberAgent Ventures của Nhật Bản và Quỹ Patamar Capital của Mỹ và mới đây nhất là STI Holding với chung mục tiêu tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>



                    <HomeFooter />
                </div>
            </>


        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Recruit);
