// import React, { Component } from 'react';
// import { Fragment } from 'react';
// import { connect } from 'react-redux';
// import Header from '../../components/Share/Header.js';
// import HomeFooter from './HomeFooter';


// class ServiceThree extends React.Component {

//     render() {
//         return (
//             <>
//                 <div className='home-header-container'>
//                     <HomeFooter />
//                 </div>
//             </>


//         )
//     }
// }
// export default ServiceThree;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ServiceThree.scss';
import HomeFooter from './HomeFooter';
import Header from '../../components/Share/Header.js';
import price from '../../assets/images/price.jpg';
import benefit1 from '../../assets/images/benefit1.png';
import benefit2 from '../../assets/images/benefit2.png';
import benefit9 from '../../assets/images/benefit9.png';
import benefit8 from '../../assets/images/benefit8.png';
import imagephone from '../../assets/images/imagephone.png';
import iconapp from '../../assets/images/icon-app.png';
import iconnote from '../../assets/images/icon-not.png';
import iconagree from '../../assets/images/icon-agree.png';
import tongvesinh from '../../assets/images/tongvesinh.jpg';
import tongvesinh1 from '../../assets/images/tongvesinh1.jpg';
import tongvesinh2 from '../../assets/images/tongvesinh2.jpg';
import tongvesinh3 from '../../assets/images/tongvesinh3.jpg';



class ServiceTwo extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
                    <div className='home-headera'>
                        <div className='home-header-image'>
                            <img src={tongvesinh} style={{ width: '90%', height: '90%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text'>
                            <div className='text-header'><b>Dịch Vụ Tổng Vệ Sinh</b></div>
                            <div className='text-content'>JupViec - Dịch vụ tổng vệ sinh dọn dẹp nhà cửa giúp Khách hàng có môi trường sống trong lành. Hơn 200.000 Khách hàng đã sử dụng và hài lòng về dịch vụ tổng vệ sinh của JupViec.</div>
                        </div>
                    </div>
                    <div className='home-header1a'>
                        <div className='home-header-text1'>
                            <div className='text-header'><b>Tại Sao Cần Tổng Vệ Sinh Nhà Cửa Thường Xuyên?</b></div>
                            <div className='text-header-content'>&#128073;   Đảm bảo môi trường sống trong lành, sạch sẽ</div>
                            <div className='text-header-content'>&#128073;   Loại bỏ các loại bụi bẩn bám lâu ngày trong nhà</div>
                            <div className='text-header-content'>&#128073;   Đảm bảo sức khoẻ cho các thành viên trong gia đình</div>
                        </div>
                        <div className='home-header-image1'>
                            <img src={tongvesinh1} style={{ width: '70%', height: '140%', marginLeft: '20%', marginTop: '3%', borderRadius: '25px' }} />

                        </div>
                    </div>
                    <div className='home-headerr'>
                        <div className='home-header-image2'>
                            <img src={tongvesinh2} style={{ width: '100%', height: '100%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text2'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Dịch Vụ Tổng Vệ Sinh Nhà Cửa JupViec Sẽ Bao Gồm:</b></div>
                                <div className='text-content'>&#10004;   Dọn dẹp toàn bộ nhà cửa kĩ càng các phòng bếp, khách, ngủ, nhà vệ sinh hoặc tổng vệ sinh dọn dẹp nhà cửa theo nhu cầu của Khách hàng</div>
                                <div className='text-content'>&#10004;   Mỗi gói gồm 02 nhân viên làm trong 4h + 01 giám sát nghiệm thu</div>
                                <div className='text-content'>&#10004;   Sử dụng các loại hóa chất làm sạch & thiết bị chuyên dụng</div>
                            </div>
                        </div>
                    </div>
                    <div className='home-header3a'>
                        <div className='home-header-text3'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Chi Tiết Dịch Vụ Tổng Vệ Sinh Nhà Ở Của JupViec Như Sau:</b></div>
                                <div className='text-content'>&#9989; Phòng Khách: Làm sạch các góc khuất dưới gầm bàn, gầm tủ, cửa kính, lau sàn,…</div>
                                <div className='text-content'>&#9989; Phòng Ngủ: Vệ sinh giường, thay ga, gấp chăn ga, gối,…</div>
                                <div className='text-content'>&#9989; Phòng Bếp: Dọn dẹp kĩ càng, ngăn nắp, sạch sẽ, lau dọn các tủ kệ, bếp gas, đổ rác,…</div>
                                <div className='text-content'>&#9989; Phòng Vệ sinh: Vệ sinh kỹ càng bồn cầu, bồn rửa mặt, lau sàn nhà,…</div>
                            </div>
                        </div>
                        <div className='home-header-image3'>
                            <img src={tongvesinh3} style={{ width: '80%', height: '70%', marginLeft: '80px', marginTop: '50px', borderRadius: '25px' }} />
                        </div>

                    </div>
                    <div className='home-header4a'>
                        <div className='home-header-image4'>
                            <img src={price} style={{ width: '100%', height: '100%', marginLeft: '20px', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text4'>
                            <div className='text-header'><b>Bảng Giá Dịch Vụ Tổng Vệ Sinh Nhà Của JupViec</b></div>
                            <div className='text-content'>&#128184;  Chỉ từ 529K/gói khi đặt dịch vụ Tổng vệ sinh dọn dẹp nhà cửa, Khách hàng dễ dàng có được ngôi nhà sạch bong sáng bóng, tha hồ thảnh thơi tận hưởng cuộc sống.</div>
                        </div>
                    </div>
                    <div className='text-advange'>
                        <b>Tại Sao Nên Sử Dụng Dịch Vụ Tổng Vệ Sinh Dọn Dẹp Nhà Cửa Của JupViec:</b>
                    </div>
                    <div className='home-header5a'>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit1} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Nhanh chóng, tiện lợi: Chỉ 30s đặt dịch vụ, có ngay nhân viên trong 60 phút
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit2} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Thanh toán minh bạch: Chi phí ca làm được hiển thị rõ ràng trên ứng dụng, không thu thêm bất cứ chi phí phát sinh nào
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit8} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Nhân viên giúp việc được đào tạo theo tiêu chuẩn Singapore
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit9} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Bảo hành 100% (làm lại) nếu Khách hàng chưa hài lòng                            </div>
                        </div>
                    </div>
                    <div className='guide'>
                        <b>Hướng Dẫn Đặt Dịch Vụ Tổng Vệ Sinh Trên Ứng Dụng JupViec:</b>
                    </div>
                    <div className='service-booking-instruction'>
                        <div className='image'>
                            <img src={imagephone} style={{ width: '100%', height: '100%', marginLeft: '30%', borderRadius: '25px' }} />
                        </div>
                        <div className='option'>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconapp} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>Chọn dịch vụ Tổng vệ sinh</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconnote} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>Điền thông tin và tiến hành đặt khảo sát</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconagree} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>JupViec gọi xác nhận</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTwo);

