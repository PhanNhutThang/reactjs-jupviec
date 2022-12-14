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
                            <div className='text-header'><b>D???ch V??? T???ng V??? Sinh</b></div>
                            <div className='text-content'>JupViec - D???ch v??? t???ng v??? sinh d???n d???p nh?? c???a gi??p Kh??ch h??ng c?? m??i tr?????ng s???ng trong l??nh. H??n 200.000 Kh??ch h??ng ???? s??? d???ng v?? h??i l??ng v??? d???ch v??? t???ng v??? sinh c???a JupViec.</div>
                        </div>
                    </div>
                    <div className='home-header1a'>
                        <div className='home-header-text1'>
                            <div className='text-header'><b>T???i Sao C???n T???ng V??? Sinh Nh?? C???a Th?????ng Xuy??n?</b></div>
                            <div className='text-header-content'>&#128073;   ?????m b???o m??i tr?????ng s???ng trong l??nh, s???ch s???</div>
                            <div className='text-header-content'>&#128073;   Lo???i b??? c??c lo???i b???i b???n b??m l??u ng??y trong nh??</div>
                            <div className='text-header-content'>&#128073;   ?????m b???o s???c kho??? cho c??c th??nh vi??n trong gia ????nh</div>
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
                                <div className='text-header'><b>D???ch V??? T???ng V??? Sinh Nh?? C???a JupViec S??? Bao G???m:</b></div>
                                <div className='text-content'>&#10004;   D???n d???p to??n b??? nh?? c???a k?? c??ng c??c ph??ng b???p, kh??ch, ng???, nh?? v??? sinh ho???c t???ng v??? sinh d???n d???p nh?? c???a theo nhu c???u c???a Kh??ch h??ng</div>
                                <div className='text-content'>&#10004;   M???i g??i g???m 02 nh??n vi??n l??m trong 4h + 01 gi??m s??t nghi???m thu</div>
                                <div className='text-content'>&#10004;   S??? d???ng c??c lo???i h??a ch???t l??m s???ch & thi???t b??? chuy??n d???ng</div>
                            </div>
                        </div>
                    </div>
                    <div className='home-header3a'>
                        <div className='home-header-text3'>
                            <div className='home-header-text'>
                                <div className='text-header'><b>Chi Ti???t D???ch V??? T???ng V??? Sinh Nh?? ??? C???a JupViec Nh?? Sau:</b></div>
                                <div className='text-content'>&#9989; Ph??ng Kh??ch: L??m s???ch c??c g??c khu???t d?????i g???m b??n, g???m t???, c???a k??nh, lau s??n,???</div>
                                <div className='text-content'>&#9989; Ph??ng Ng???: V??? sinh gi?????ng, thay ga, g???p ch??n ga, g???i,???</div>
                                <div className='text-content'>&#9989; Ph??ng B???p: D???n d???p k?? c??ng, ng??n n???p, s???ch s???, lau d???n c??c t??? k???, b???p gas, ????? r??c,???</div>
                                <div className='text-content'>&#9989; Ph??ng V??? sinh: V??? sinh k??? c??ng b???n c???u, b???n r???a m???t, lau s??n nh??,???</div>
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
                            <div className='text-header'><b>B???ng Gi?? D???ch V??? T???ng V??? Sinh Nh?? C???a JupViec</b></div>
                            <div className='text-content'>&#128184;  Ch??? t??? 529K/g??i khi ?????t d???ch v??? T???ng v??? sinh d???n d???p nh?? c???a, Kh??ch h??ng d??? d??ng c?? ???????c ng??i nh?? s???ch bong s??ng b??ng, tha h??? th???nh th??i t???n h?????ng cu???c s???ng.</div>
                        </div>
                    </div>
                    <div className='text-advange'>
                        <b>T???i Sao N??n S??? D???ng D???ch V??? T???ng V??? Sinh D???n D???p Nh?? C???a C???a JupViec:</b>
                    </div>
                    <div className='home-header5a'>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit1} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Nhanh ch??ng, ti???n l???i: Ch??? 30s ?????t d???ch v???, c?? ngay nh??n vi??n trong 60 ph??t
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit2} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />

                            </div>
                            <div className='home-header-image5z'>
                                Thanh to??n minh b???ch: Chi ph?? ca l??m ???????c hi???n th??? r?? r??ng tr??n ???ng d???ng, kh??ng thu th??m b???t c??? chi ph?? ph??t sinh n??o
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit8} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                Nh??n vi??n gi??p vi???c ???????c ????o t???o theo ti??u chu???n Singapore
                            </div>
                        </div>
                        <div className='home-header-image5'>
                            <div className='home-header-image5s'>
                                <img src={benefit9} style={{ width: '25%', height: '45%', marginTop: '15%', marginLeft: '30%' }} />
                            </div>
                            <div className='home-header-image5z'>
                                B???o h??nh 100% (l??m l???i) n???u Kh??ch h??ng ch??a h??i l??ng                            </div>
                        </div>
                    </div>
                    <div className='guide'>
                        <b>H?????ng D???n ?????t D???ch V??? T???ng V??? Sinh Tr??n ???ng D???ng JupViec:</b>
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
                                    <b>Ch???n d???ch v??? T???ng v??? sinh</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconnote} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>??i???n th??ng tin v?? ti???n h??nh ?????t kh???o s??t</b>
                                </div>
                            </div>
                            <div className='option-one'>
                                <div className='option-one-img'>
                                    <img src={iconagree} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text'>
                                    <b>JupViec g???i x??c nh???n</b>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTwo);

