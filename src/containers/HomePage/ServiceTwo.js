import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ServiceTwo.scss';
import HomeFooter from './HomeFooter';
import Header from '../../components/Share/Header.js';
import vesinhnha1 from '../../assets/images/vesinhnha1.png';
import clear from '../../assets/images/clear.jpg';
import staff from '../../assets/images/nhanvien.jpg';
import advantage from '../../assets/images/advantage.png';
import price from '../../assets/images/price.jpg';
import benefit1 from '../../assets/images/benefit1.png';
import benefit5 from '../../assets/images/benefit5.png';
import benefit6 from '../../assets/images/benefit6.png';
import benefit7 from '../../assets/images/benefit7.png';
import imagephone from '../../assets/images/imagephone.png';
import iconapp from '../../assets/images/icon-app.png';
import iconnote from '../../assets/images/icon-not.png';
import iconagree from '../../assets/images/icon-agree.png';



class ServiceTwo extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
                    <div className='home-headera'>
                        <div className='home-header-image'>
                            <img src={vesinhnha1} style={{ width: '90%', height: '90%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text'>
                            <div className='text-header'><b>Dịch Vụ Vệ Sinh Nhà Trọn Gói Uy Tín, Chuyên Nghiệp</b></div>
                            <div className='text-content'>Nhiều gia đình mong muốn có không gian sống trong lành, sạch sẽ nhưng không phải ai cũng có thời gian vệ sinh nhà cửa thường xuyên. Trải nghiệm ngay JupViec - dịch vụ vệ sinh tại nhà trọn gói để có không gian sống trong lành, sạch sẽ.</div>
                        </div>
                    </div>
                    <div className='home-header1a'>
                        <div className='home-header-text1'>
                            <div className='text-header'><b>Dịch Vụ Vệ Sinh Nhà Ở Theo Giờ Của JupViec Bao Gồm:</b></div>
                            <div className='text-header-content'><b>&#128151;   Dịch Vụ Theo Giờ:</b></div>
                            <div className='text-content'>01 người làm từ 2-4 tiếng, có đầy đủ công cụ, dụng cụ</div>
                            <div className='text-header-content'><b>&#128151;   Dịch Vụ Định Kỳ:</b></div>
                            <div className='text-content'>Nhân viên giúp việc sẽ đến làm cố định tại nhà Khách hàng vào những ngày trong tuần. Khi đến làm việc, nhân viên sẽ phải mặc đồng phục.</div>
                            <div className='text-header-content'><b>&#128151;   Dịch Vụ Tổng Vệ Sinh:</b></div>
                            <div className='text-content'>Dịch vụ làm sạch chuyên sâu cho ngôi nhà mới xây xong, nhà sau khi sửa chữa và nhà ở lâu năm không được dọn dẹp.</div>
                        </div>
                        <div className='home-header-image1'>
                            <img src={clear} style={{ width: '110%', height: '250%', marginLeft: '20px', borderRadius: '25px' }} />

                        </div>
                    </div>
                    <div className='home-header2a'>
                        <div className='home-header-image2'>
                            <img src={staff} style={{ width: '90%', height: '90%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text2'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Nhân Viên Cần Tuân Thủ:</b></div>
                                <div className='text-content'>&#128073;   Đầy đủ đồng phục, công cụ dụng cụ (chỉ áp dụng cho ca Lẻ)</div>
                                <div className='text-content'>&#128073;   Trao đổi chi tiết công việc với Khách hàng trước khi làm</div>
                                <div className='text-content'>&#128073;   Mời Khách hàng kiểm tra túi trước khi về</div>
                            </div>
                        </div>
                    </div>
                    <div className='home-header3a'>
                        <div className='home-header-text3'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Ưu Điểm Của Dịch Vụ Vệ Sinh Nhà Trọn Gói như sau:</b></div>
                                <div className='text-content'>&#10004;  Nhân viên được đào tạo theo tiêu chuẩn Singapore</div>
                                <div className='text-content'>&#10004;  Tiết kiệm 30% so với dịch vụ giúp việc truyền thống</div>
                                <div className='text-content'>&#10004;   Tiết kiệm thời gian, linh động ca làm</div>
                            </div>
                        </div>
                        <div className='home-header-image3'>
                            <img src={advantage} style={{ width: '60%', height: '90%', marginLeft: '80px', borderRadius: '25px' }} />
                        </div>

                    </div>
                    <div className='home-header4a'>
                        <div className='home-header-image4'>
                            <img src={price} style={{ width: '100%', height: '100%', marginLeft: '20px', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text4'>
                            <div className='text-header'><b>Bảng Giá Dịch Vụ Vệ Sinh Nhà Chuyên Nghiệp</b></div>
                            <div className='text-content'>&#128184;  Chỉ từ 5x.000đ/giờ bạn đã sở hữu ngôi nhà sạch bong sáng bóng</div>
                        </div>
                    </div>
                    <div className='text-advange'>
                        <b>Lợi Ích Khi Sử Dụng Dịch Vụ Vệ Sinh Nhà Chuyên Nghiệp Tại JupViec:</b>
                    </div>
                    <div className='home-header5a'>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit1} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Nhanh chóng, dễ dàng: Chỉ 30s đặt dịch vụ có ngay người giúp việc theo giờ chuyên nghiệp trong 60 phút
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit7} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Tin cậy: Người giúp việc đầy đủ hồ sơ, nhân thân tốt. Khách hàng được ký hợp đồng, bảo hành dịch vụ và bảo hiểm tài sản.
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit6} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Chuyên nghiệp: Với 8 năm kinh nghiệm cung cấp dịch vụ cùng đội ngũ Tư vấn viên & Chăm sóc Khách hàng tận tâm.
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit5} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Chất lượng: Bảo hành 100% (làm lại) nếu chưa hài lòng
                            </div>
                        </div>
                    </div>
                    <div className='guide'>
                        <b>Hướng Dẫn Đặt Dịch Vụ Vệ Sinh Nhà Giá Rẻ Trên Ứng Dụng JupViec</b>
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
                                    <b>Chọn dịch vụ Theo giờ/Định kỳ/Tổng vệ sinh.</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconnote} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>Lần lượt điền thông tin.</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconagree} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>Xác nhận & Thanh toán.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='service-booking-instruction'>
                        <div className='image'>
                            <img src={imagephone} style={{ width: '100%', height: '100%', marginLeft: '20%' }} />
                        </div>
                        <div className='option'>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconapp} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>Chọn dịch vụ Vệ sinh sofa, nệm, rèm, thảm.</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconnote} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>Lần lượt điền thông tin.</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconagree} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>JupSofa sẽ gọi xác nhận.</b>
                                </div>
                            </div>
                        </div> */}



                    <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTwo);

