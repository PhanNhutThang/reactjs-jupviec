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
                            <div className='text-header'><b>D???ch V??? V??? Sinh V??n Ph??ng</b></div>
                            <div className='text-content'>JupViec - D???ch v??? t???ng v??? sinh d???n d???p nh?? c???a gi??p Kh??ch h??ng c?? m??i tr?????ng s???ng trong l??nh. H??n 200.000 Kh??ch h??ng ???? s??? d???ng v?? h??i l??ng v??? d???ch v??? t???ng v??? sinh c???a JupViec.</div>
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
                            <div className='text-header'><b>Gi???i Thi???u</b></div>
                            <div className='text-header-content'>JupViec l?? C??ng ty chuy??n cung c???p D???ch v??? v??? sinh v??n ph??ng, nh?? c???a,??? V???i h??n 9 n??m kinh nghi???m cung c???p d???ch v??? gi??p vi???c v?? l??m s???ch c??ng ?????i ng?? nh??n vi??n gi??p vi???c t???n t??m, ???????c ????o t???o b??i b???n theo ti??u chu???n Singapore.</div>
                            <div className='text-header-content'>Ch??ng t??i r???t h??n h???nh ???????c ?????ng h??nh c??ng Qu?? Doanh nghi???p trong vi???c t???o d???ng m???t h??nh ???nh chuy??n nghi???p khi c?? ?????i t??c v?? kh??ch h??ng gh?? th??m v??n ph??ng.</div>
                        </div>
                    </div>
                    <div className='home-headerr'>
                        <div className='home-header-text2'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>D???ch V??? V??? Sinh V??n Ph??ng C???a JupViec Bao G???m:</b></div>
                                <div className='text-content'>&#10145;  V??? sinh v??n ph??ng theo gi???: 01 nh??n vi??n gi??p vi???c l??m theo ca t??? 2-4 ti???ng</div>
                                <div className='text-content'>&#10145;   V??? sinh v??n ph??ng full-time: 01 nh??n vi??n gi??p vi???c l??m ca 8h theo gi??? h??nh ch??nh (ca S??ng - chi???u; Chi???u - t???i)</div>
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
                                <div className='text-header'><b>Chi Ti???t D???ch V??? V??? Sinh V??n Ph??ng Nh?? Sau:</b></div>
                                <div className='text-content'>&#127804; Lau s??n, b??n gh???, c???u thang, khu v???c h??nh lang,???</div>
                                <div className='text-content'>&#127804; V??? sinh k??nh, thu gom, ????? r??c,???</div>
                                <div className='text-content'>&#127804; Qu??t d???n khu v???c ch??nh c???a v??n ph??ng: l???i v??o, qu???y l??? t??n, ph??ng ti???p kh??ch, ph??ng h???p, thang m??y, s???nh, nh?? v??? sinh,???</div>
                            </div>
                        </div>


                    </div>
                    <div className='home-header4a'>
                        <div className='home-header-image4'>
                            <img src={vanphong5} style={{ width: '90%', height: '90%', marginLeft: '20px', marginTop: '5%', borderRadius: '25px' }} />
                        </div>
                        <div className='home-header-text4'>
                            <div className='text-header'><b>Nh??n Vi??n Gi??p Vi???c C???n Tu??n Th???:</b></div>
                            <div className='text-content'>&#127894; M???c ?????y ????? ?????ng ph???c </div>
                            <div className='text-content'>&#127894; ?????y ????? c??ng c??? d???ng c??? v?? ch???t t???y r???a c?? b???n </div>
                            <div className='text-content'>&#127894; Trao ?????i chi ti???t c??ng vi???c tr?????c khi l??m</div>
                            <div className='text-content'>&#127894; M???i Kh??ch h??ng ki???m tra t??i tr?????c khi v???</div>
                        </div>
                    </div>
                    <div className='text-advange'>
                        <b>T???i Sao N??n Ch???n D???ch V??? V??? Sinh V??n Ph??ng C???a JupViec?</b>
                    </div>
                    <div className='home-header5a'>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit7} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                An T??m: C??? ?????nh 01 nh??n vi??n gi??p vi???c
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit10} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Chuy??n Nghi???p: Nh??n vi??n gi??p vi???c ???????c JupViec tr???c ti???p tuy???n ch???n v?? ????o t???o theo ti??u chu???n Singapore
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit8} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Tin C???y: Nh??n vi??n gi??p vi???c c?? ?????y ????? h??? s??, nh??n th??n t???t, c?? x??c nh???n nh??n th??n t???t t??? ch??nh quy???n ?????a ph????ng
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit5} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Uy T??n: Ch??nh s??ch b???o h??nh 100% n???u Qu?? Doanh nghi???p kh??ng h??i l??ng.                          </div>
                        </div>
                    </div>
                    <div className='guide'>
                        <b>B???ng Gi?? D???ch V??? V??? Sinh V??n Ph??ng:</b>
                    </div>
                    <div className='service-booking-instruction'>
                        <div className='image'>
                            <img src={price} style={{ width: '80%', height: '80%', marginLeft: '10%', borderRadius: '25px' }} />
                        </div>
                        <div className='option'>
                            <div className='luuy'><b>L??u ??:</b></div>
                            <div className='content-option'>&#128312; Gi?? ???? bao g???m CCDC v?? ch???t t???y r???a l??m vi???c c?? b???n. 100% ch???t t???y r???a v?? c??ng c??? ch??nh h??ng t??? T???p ??o??n Unilever v?? 3M.</div>
                            <div className='content-option'>&#128312; B???o h??nh 100% ch???t l?????ng d???ch v???. B???o hi???m ????? v??? t??i s???n.</div>
                            <div className='content-option'>&#128312; ?????i v???i d???ch v??? v??? sinh v??n ph??ng theo gi??? c??c ca ?????n 3h/ng??y s??? gi???m 5% ????n gi??/gi??? so v???i ca 2h/ng??y.</div>
                            <div className='content-option'>&#128312; B???ng gi?? ??p d???ng v??o ng??y th?????ng. Ng??y L???, T???t ??p d???ng 300% gi?? ng??y th?????ng. Ng??y gi??p T???t (10 ng??y tr?????c T???t v?? 10 ng??y sau T???t) ??p d???ng 250% gi?? ng??y th?????ng.</div>
                            <div className='content-option'>&#128312; B???ng gi?? ??p d???ng t???i H??? Ch?? Minh. Ri??ng c??c qu???n 1, 2, 9, Th??? ?????c, B??nh Th???nh ,T??n B??nh ph??? thu 5%.</div>
                            <div className='content-option'>&#128312; Ch????ng tr??nh ??u ????i kh??ng ??p d???ng ?????ng th???i.</div>
                        </div>
                    </div>
                    <div className='huongdandatdichvu'>
                        <div className='text-huongdandatdichvu'>
                            <div className='text1'>
                                <b>H?????ng D???n ?????t D???ch V??? V??? Sinh V??n Ph??ng:</b>
                            </div>
                            <div className='text2'>
                                &#128222;  ????? ?????t d???ch v??? V??? sinh v??n ph??ng, Qu?? Doanh nghi???p vui l??ng g???i v??o Hotline 1900 9999 nh??nh 1 ????? ???????c t?? v???n chi ti???t, c??? th???.
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

