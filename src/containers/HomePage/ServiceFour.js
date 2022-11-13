// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import './ServiceFour.scss';
// import HomeFooter from './HomeFooter';
// import Header from '../../components/Share/Header.js';

// class ServiceFour extends React.Component {

//     render() {
//         return (
//             <>
//                 <Header />
//                 <div className='home-header-container'>
//                     <div className='home-header'>
//                         <div className='home-header-image'>

//                         </div>
//                         <div className='home-header-text'>

//                         </div>
//                     </div>
//                     <div className='home-header1'>
//                         <div className='home-header-image1'>

//                         </div>
//                         <div className='home-header-text1'>

//                         </div>
//                     </div>
//                     <div className='home-header2'>
//                         <div className='home-header-image2'>

//                         </div>
//                         <div className='home-header-text2'>

//                         </div>
//                     </div>
//                     <div className='home-header3'>
//                         <div className='home-header-image3'>

//                         </div>
//                         <div className='home-header-text3'>

//                         </div>
//                     </div>
//                     <div className='home-header4'>
//                         <div className='home-header-image4'>

//                         </div>
//                         <div className='home-header-text4'>

//                         </div>
//                     </div>
//                     <div className='home-header5'>
//                         <div className='home-header-image5'>

//                         </div>
//                         <div className='home-header-text5'>

//                         </div>
//                     </div>
//                     <div className='home-header6'>
//                         <div className='home-header-image6'>

//                         </div>
//                         <div className='home-header-text6'>
//                         </div>

//                     </div>
//                     <HomeFooter />
//                 </div>
//             </>
//         )
//     }
// }
// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.user.isLoggedIn
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ServiceFour);;
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
import './ServiceFour.scss';
import HomeFooter from './HomeFooter';
import Header from '../../components/Share/Header.js';
import benefit10 from '../../assets/images/benefit10.png';
import benefit5 from '../../assets/images/benefit5.png';
import benefit7 from '../../assets/images/benefit7.png';
import benefit8 from '../../assets/images/benefit8.png';
import imagephone from '../../assets/images/imagephone.png';
import iconapp from '../../assets/images/icon-app.png';
import iconnote from '../../assets/images/icon-not.png';
import iconagree from '../../assets/images/icon-agree.png';
import vanphong1 from '../../assets/images/vanphong1.jpg';
import vanphong4 from '../../assets/images/vanphong4.jpg';
import vanphong2 from '../../assets/images/vanphong2.jpg';
import vanphong3 from '../../assets/images/vanphong3.png';
import vanphong5 from '../../assets/images/vanphong5.png';
import price from '../../assets/images/price-list.jpg';


class ServiceTwo extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
                    <div className='home-headera'>
                        <div className='home-header-text'>
                            <div className='text-header'><b>Dịch Vụ Vệ Sinh Văn Phòng</b></div>
                            <div className='text-content'>JupViec - Dịch vụ tổng vệ sinh dọn dẹp nhà cửa giúp Khách hàng có môi trường sống trong lành. Hơn 200.000 Khách hàng đã sử dụng và hài lòng về dịch vụ tổng vệ sinh của JupViec.</div>
                        </div>
                        <div className='home-header-image'>
                            <img src={vanphong1} style={{ width: '90%', height: '90%', borderRadius: '25px' }} />
                        </div>
                    </div>
                    <div className='home-header1a'>
                        <div className='home-header-image1'>
                            <img src={vanphong4} style={{ width: '90%', height: '140%', marginLeft: '5%', marginTop: '5%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text1'>
                            <div className='text-header'><b>Giới Thiệu</b></div>
                            <div className='text-header-content'>JupViec là Công ty chuyên cung cấp Dịch vụ vệ sinh văn phòng, nhà cửa,… Với hơn 9 năm kinh nghiệm cung cấp dịch vụ giúp việc và làm sạch cùng đội ngũ nhân viên giúp việc tận tâm, được đào tạo bài bản theo tiêu chuẩn Singapore.</div>
                            <div className='text-header-content'>Chúng tôi rất hân hạnh được đồng hành cùng Quý Doanh nghiệp trong việc tạo dựng một hình ảnh chuyên nghiệp khi có đối tác và khách hàng ghé thăm văn phòng.</div>
                        </div>
                    </div>
                    <div className='home-headerr'>
                        <div className='home-header-text2'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Dịch Vụ Vệ Sinh Văn Phòng Của JupViec Bao Gồm:</b></div>
                                <div className='text-content'>&#10145;  Vệ sinh văn phòng theo giờ: 01 nhân viên giúp việc làm theo ca từ 2-4 tiếng</div>
                                <div className='text-content'>&#10145;   Vệ sinh văn phòng full-time: 01 nhân viên giúp việc làm ca 8h theo giờ hành chính (ca Sáng - chiều; Chiều - tối)</div>
                            </div>
                        </div>
                        <div className='home-header-image2'>
                            <img src={vanphong2} style={{ width: '100%', height: '100%', borderRadius: '25px' }} />
                        </div>
                    </div>
                    <div className='home-header3a'>
                        <div className='home-header-image3'>
                            <img src={vanphong3} style={{ width: '80%', height: '70%', marginLeft: '80px', marginTop: '50px', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text3'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Chi Tiết Dịch Vụ Vệ Sinh Văn Phòng Như Sau:</b></div>
                                <div className='text-content'>&#127804; Lau sàn, bàn ghế, cầu thang, khu vực hành lang,…</div>
                                <div className='text-content'>&#127804; Vệ sinh kính, thu gom, đổ rác,…</div>
                                <div className='text-content'>&#127804; Quét dọn khu vực chính của văn phòng: lối vào, quầy lễ tân, phòng tiếp khách, phòng họp, thang máy, sảnh, nhà vệ sinh,…</div>
                            </div>
                        </div>


                    </div>
                    <div className='home-header4a'>
                        <div className='home-header-image4'>
                            <img src={vanphong5} style={{ width: '90%', height: '90%', marginLeft: '20px', marginTop: '5%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text4'>
                            <div className='text-header'><b>Nhân Viên Giúp Việc Cần Tuân Thủ:</b></div>
                            <div className='text-content'>&#127894; Mặc đầy đủ đồng phục </div>
                            <div className='text-content'>&#127894; Đầy đủ công cụ dụng cụ và chất tẩy rửa cơ bản </div>
                            <div className='text-content'>&#127894; Trao đổi chi tiết công việc trước khi làm</div>
                            <div className='text-content'>&#127894; Mời Khách hàng kiểm tra túi trước khi về</div>
                        </div>
                    </div>
                    <div className='text-advange'>
                        <b>Tại Sao Nên Chọn Dịch Vụ Vệ Sinh Văn Phòng Của JupViec?</b>
                    </div>
                    <div className='home-header5a'>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit7} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                An Tâm: Cố định 01 nhân viên giúp việc
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit10} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Chuyên Nghiệp: Nhân viên giúp việc được JupViec trực tiếp tuyển chọn và đào tạo theo tiêu chuẩn Singapore
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit8} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Tin Cậy: Nhân viên giúp việc có đầy đủ hồ sơ, nhân thân tốt, có xác nhận nhân thân tốt từ chính quyền địa phương
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit5} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Uy Tín: Chính sách bảo hành 100% nếu Quý Doanh nghiệp không hài lòng.                          </div>
                        </div>
                    </div>
                    <div className='guide'>
                        <b>Bảng Giá Dịch Vụ Vệ Sinh Văn Phòng:</b>
                    </div>
                    <div className='service-booking-instruction'>
                        <div className='image'>
                            <img src={price} style={{ width: '80%', height: '80%', marginLeft: '10%', borderRadius: '25px' }} />
                        </div>
                        <div className='option'>
                            <div className='luuy'><b>Lưu Ý:</b></div>
                            <div className='content-option'>&#128312; Giá đã bao gồm CCDC và chất tẩy rửa làm việc cơ bản. 100% chất tẩy rửa và công cụ chính hãng từ Tập đoàn Unilever và 3M.</div>
                            <div className='content-option'>&#128312; Bảo hành 100% chất lượng dịch vụ. Bảo hiểm đổ vỡ tài sản.</div>
                            <div className='content-option'>&#128312; Đối với dịch vụ vệ sinh văn phòng theo giờ các ca đến 3h/ngày sẽ giảm 5% đơn giá/giờ so với ca 2h/ngày.</div>
                            <div className='content-option'>&#128312; Bảng giá áp dụng vào ngày thường. Ngày Lễ, Tết áp dụng 300% giá ngày thường. Ngày giáp Tết (10 ngày trước Tết và 10 ngày sau Tết) áp dụng 250% giá ngày thường.</div>
                            <div className='content-option'>&#128312; Bảng giá áp dụng tại Hồ Chí Minh. Riêng các quận 1, 2, 9, Thủ Đức, Bình Thạnh ,Tân Bình phụ thu 5%.</div>
                            <div className='content-option'>&#128312; Chương trình ưu đãi không áp dụng đồng thời.</div>
                        </div>
                    </div>
                    <div className='huongdandatdichvu'>
                        <div className='text-huongdandatdichvu'>
                            <div className='text1'>
                                <b>Hướng Dẫn Đặt Dịch Vụ Vệ Sinh Văn Phòng:</b>
                            </div>
                            <div className='text2'>
                                &#128222;  Để đặt dịch vụ Vệ sinh văn phòng, Quý Doanh nghiệp vui lòng gọi vào Hotline 1900 9999 nhánh 1 để được tư vấn chi tiết, cụ thể.
                            </div>
                        </div>
                        <div className='image-huongdandatdichvu'>
                            <img src={imagephone} style={{ width: '60%', height: '100%', marginLeft: '10%', borderRadius: '25px' }} />
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTwo);

