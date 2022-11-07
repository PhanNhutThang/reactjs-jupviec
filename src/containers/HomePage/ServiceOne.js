// import React, { Component } from 'react';
// import Header from '../../components/Share/Header.js';
// import HomeFooter from './HomeFooter';
// import './ServiceOne.scss';
// import { connect } from 'react-redux';
// import sofa1 from '../../assets/images/sofa1.jpg';
// import sofa2 from '../../assets/images/sofa2.png';
// import sofa3 from '../../assets/images/sofa3.jpg';
// import sofada from '../../assets/images/sofada.jpg';
// import sofani from '../../assets/images/sofani.jpg';
// import sofa4 from '../../assets/images/sofa4.png';
// import sofa5 from '../../assets/images/sofa5.png';
// import benefit1 from '../../assets/images/benefit1.png';
// import benefit2 from '../../assets/images/benefit2.png';
// import benefit3 from '../../assets/images/benefit3.png';
// import benefit4 from '../../assets/images/benefit4.png';
// import benefit5 from '../../assets/images/benefit5.png';
// import benefit6 from '../../assets/images/benefit6.png';
// import imagephone from '../../assets/images/imagephone.png';
// import iconapp from '../../assets/images/icon-app.png';
// import iconnote from '../../assets/images/icon-not.png';
// import iconagree from '../../assets/images/icon-agree.png';


// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';


// class ServiceOne extends Component {

//     render() {
//         return (
//             <>
//                 <Header />
//                 <div className='container'>
//                     <div className='container-service'>
//                         <div className='container-service-one'>
//                             <div className='font-size-header'><b>Dịch Vụ Vệ Sinh SoFa Tại Nhà Chuyên Nghiệp</b></div>
//                             <div className='font-size-content'>JupSofa - Dịch vụ vệ sinh Sofa, đệm, rèm, thảm sử dụng công nghệ tiên tiến từ Đức giúp làm sạch sâu các vết ố bẩn, nấm mốc, ố vàng.</div>
//                             <div className='font-size-content'>Áp dụng quy trình vệ sinh hiện đại, tối ưu kết hợp cùng kinh nghiệm dày dặn của đội ngũ nhân viên vệ sinh, Vệ Sinh Việt đảm bảo đem lại sự sạch sẽ nhất có thể cho bộ Sofa cũng như sự hài lòng của khách hàng.</div>
//                         </div>
//                         <div className='container-service-two'>
//                             <img src={sofa1} style={{ width: '90%', height: '90%' }} />
//                         </div>
//                     </div>
//                     <div className='container-service1'>
//                         <div className='container-service-three'>
//                             <img src={sofa2} style={{ width: '50%', height: '100%' }} />
//                         </div>
//                         <div className='container-service-one'>
//                             <div className='font-size-header'><b>Giới Thiệu</b></div>
//                             <div className='font-size-content'>JupSofa - Dịch vụ vệ sinh Sofa, đệm, rèm, thảm sử dụng công nghệ tiên tiến từ Đức được Khách hàng tin tưởng và sử dụng trong suốt thời gian qua.</div>
//                             <div className='font-size-content'>Chỉ với một vài thao tác đơn giản trên ứng dụng, Khách hàng đã tìm được Dịch vụ Vệ sinh Sofa uy tín, chuyên nghiệp với nhiều ưu đãi hấp dẫn.</div>
//                             <div className='font-size-content'>Hiện tại JupSofa - Dịch vụ Sofa cung cấp dịch vụ tại Hà Nội, Tp.Hồ Chí Minh, Hải Phòng</div>
//                         </div>
//                     </div>
//                     <div className='container-service'>
//                         <div className='container-service-one'>
//                             <div className='font-size-header'><b>Tại sao cần phải vệ sinh sofa thường xuyên</b></div>
//                             <div className='font-size-content'>&rarr; Loại bỏ các loại vi khuẩn gây bệnh tích tụ lâu ngày </div>
//                             <div className='font-size-content'>&rarr; Giữ cho ghế Sofa luôn mới</div>
//                             <div className='font-size-content'>&rarr; Nâng cao tuổi thọ Sofa, tiết kiệm chi phí thay đổi</div>
//                         </div>
//                         <div className='container-service-two'>
//                             <img src={sofa3} style={{ width: '100%', height: '80%' }} />
//                         </div>
//                     </div>
//                     <div className='container-service-money'>
//                         <b>Bảng giá dịch vụ làm sạch sofa tại nhà</b>
//                     </div>
//                     <div className='container-service-table'>
//                         <table>
//                             <tr>
//                                 <th>Loại sofa</th>
//                                 <th>Hà Nội</th>
//                                 <th>Hồ Chí Minh</th>
//                             </tr>
//                             <tr>
//                                 <td>Sofa nỉ</td>
//                                 <td>200-300k/bộ</td>
//                                 <td>300-400K/bộ</td>
//                             </tr>
//                             <tr>
//                                 <td>Sofa da</td>
//                                 <td>450-550k/bộ</td>
//                                 <td>350-450k/bộ</td>
//                             </tr>
//                         </table>
//                     </div>
//                     <div className='coment'>(Giá mang tính chất tham khảo, để biết chi tiết giá trong giai đoạn Tết Nhâm Dần 2022, khách hàng vui lòng liên hệ Hotline 1900 6082 để được tư vấn).</div>
//                     <div className='quytrinh'>
//                         <b>Quy trình làm sạch sofa tại nhà</b>
//                     </div>
//                     <div className='tabs'>
//                         <Tabs
//                             defaultActiveKey="profile"
//                             id="uncontrolled-tab-example"
//                             className="mb-3"
//                         >
//                             <Tab eventKey="home" title="Quy trình làm sạch sofa da tại nhà">
//                                 <div className='sofada-sofa'>
//                                     <div className='sofada'>
//                                         <img src={sofada} style={{ width: '100%', height: '100%' }} />
//                                     </div>
//                                     <div className='sofa'>
//                                         <img src={sofa5} style={{ width: '100%', height: '90%' }} />
//                                     </div>
//                                 </div>
//                             </Tab>
//                             <Tab eventKey="profile" title="Quy trình làm sạch sofa nỉ tại nhà">
//                                 <div className='sofada-sofa'>
//                                     <div className='sofada'>
//                                         <img src={sofani} style={{ width: '100%', height: '100%' }} />
//                                     </div>
//                                     <div className='sofa'>
//                                         <img src={sofa4} style={{ width: '100%', height: '110%' }} />
//                                     </div>
//                                 </div>
//                             </Tab>
//                         </Tabs>
//                     </div>
//                     <div className='benefit'>
//                         <b>Lợi Ích Khi Sử Dụng Dịch Vụ Vệ Sinh Giặt Ghế Sofa Của JupSofa</b>
//                     </div>
//                     <div className='component-benefit'>
//                         <div className='component-benefit-content'>
//                             <div className='content-1'>
//                                 <div className='content-1-1'>
//                                     <img src={benefit1} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
//                                 </div>
//                                 <div className='content-1-2'>
//                                     Nhanh chóng, thuận tiện, chuyên nghiệp khi đặt dịch vụ.
//                                 </div>

//                             </div>
//                             <div className='content-1'>
//                                 <div className='content-1-1'>
//                                     <img src={benefit2} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
//                                 </div>
//                                 <div className='content-1-2'>
//                                     Mức giá hấp dẫn với nhiều chính sách ưu đãi, khuyến mại.
//                                 </div>
//                             </div>
//                             <div className='content-1'>
//                                 <div className='content-1-1'>
//                                     <img src={benefit3} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
//                                 </div>
//                                 <div className='content-1-2'>
//                                     Môi trường sống trong lành cho sức khỏe gia đình
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='component-benefit-content'>
//                             <div className='content-1'>
//                                 <div className='content-1-1'>
//                                     <img src={benefit4} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
//                                 </div>
//                                 <div className='content-1-2'>
//                                     Công nghệ làm sạch hiện đại, tiên tiến
//                                 </div>
//                             </div>
//                             <div className='content-1'>
//                                 <div className='content-1-1'>
//                                     <img src={benefit5} style={{ width: '25%', height: '50%', marginTop: '5%' }} />
//                                 </div>
//                                 <div className='content-1-2'>
//                                     Hóa chất tẩy rửa an toàn, thân thiện với sức khỏe và môi trường
//                                 </div>
//                             </div>
//                             <div className='content-1'>
//                                 <div className='content-1-1'>
//                                     <img src={benefit6} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
//                                 </div>
//                                 <div className='content-1-2'>
//                                     Kỹ thuật viên được đào tạo chuyên nghiệp, chu đáo, tận tâm
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='guide'>
//                         <b>Hướng Dẫn Đặt Dịch Vụ Vệ Sinh Sofa Của JupSofa</b>
//                     </div>
//                     <div className='guide-one'>
//                         JupViec là ứng dụng giúp việc nhà theo giờ kết nối nhu cầu giúp<br /> việc của Khách hàng & Người lao động.
//                     </div>
//                     <div className='service-booking-instruction'>
//                         <div className='image'>
//                             <img src={imagephone} style={{ width: '60%', height: '100%', marginLeft: '20%' }} />
//                         </div>
//                         <div className='option'>
//                             <div className='option-one'>
//                                 <div className='option-one-img'>
//                                     <img src={iconapp} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
//                                 </div>
//                                 <div className='option-one-text'>
//                                     <b>Chọn dịch vụ Vệ sinh sofa, nệm, rèm, thảm.</b>
//                                 </div>
//                             </div>
//                             <div className='option-one'>
//                                 <div className='option-one-img'>
//                                     <img src={iconnote} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
//                                 </div>
//                                 <div className='option-one-text'>
//                                     <b>Lần lượt điền thông tin.</b>
//                                 </div>
//                             </div>
//                             <div className='option-one'>
//                                 <div className='option-one-img'>
//                                     <img src={iconagree} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
//                                 </div>
//                                 <div className='option-one-text'>
//                                     <b>JupSofa sẽ gọi xác nhận.</b>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div><HomeFooter /></div>
//                 </div>

//             </>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.admin.isLoggedIn
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ServiceOne);

import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Share/Header.js';
import HomeFooter from './HomeFooter';
import './ServiceOne.scss';
import sofa1 from '../../assets/images/sofa1.jpg';
import sofa2 from '../../assets/images/sofa2.png';
import sofa3 from '../../assets/images/sofa3.jpg';
import sofada from '../../assets/images/sofada.jpg';
import sofani from '../../assets/images/sofani.jpg';
import sofa4 from '../../assets/images/sofa4.png';
import sofa5 from '../../assets/images/sofa5.png';
import benefit1 from '../../assets/images/benefit1.png';
import benefit2 from '../../assets/images/benefit2.png';
import benefit3 from '../../assets/images/benefit3.png';
import benefit4 from '../../assets/images/benefit4.png';
import benefit5 from '../../assets/images/benefit5.png';
import benefit6 from '../../assets/images/benefit6.png';
import imagephone from '../../assets/images/imagephone.png';
import iconapp from '../../assets/images/icon-app.png';
import iconnote from '../../assets/images/icon-not.png';
import iconagree from '../../assets/images/icon-agree.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class ServiceOne extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
                    <div className='container-service'>
                        <div className='container-service-one'>
                            <div className='font-size-header'><b>Dịch Vụ Vệ Sinh SoFa Tại Nhà Chuyên Nghiệp:</b></div>
                            <div className='font-size-content'>&#128330; JupSofa - Dịch vụ vệ sinh Sofa, đệm, rèm, thảm sử dụng công nghệ tiên tiến từ Đức giúp làm sạch sâu các vết ố bẩn, nấm mốc, ố vàng.</div>
                            <div className='font-size-content'>&#128330; Áp dụng quy trình vệ sinh hiện đại, tối ưu kết hợp cùng kinh nghiệm dày dặn của đội ngũ nhân viên vệ sinh, Vệ Sinh Việt đảm bảo đem lại sự sạch sẽ nhất có thể cho bộ Sofa cũng như sự hài lòng của khách hàng.</div>
                        </div>
                        <div className='container-service-two'>
                            <img src={sofa1} style={{ width: '95%', height: '90%', marginBottom: '3%', borderRadius: '25px' }} />
                        </div>
                    </div>
                    <div className='container-service1'>
                        <div className='container-service-three'>
                            <img src={sofa2} style={{ width: '50%', height: '100%', marginLeft: '20%', marginTop: '5%', borderRadius: '25px' }} />
                        </div>
                        <div className='container-service-one'>
                            <div className='font-size-header'><b>Giới Thiệu</b></div>
                            <div className='font-size-content'>&#127881; JupSofa - Dịch vụ vệ sinh Sofa, đệm, rèm, thảm sử dụng công nghệ tiên tiến từ Đức được Khách hàng tin tưởng và sử dụng trong suốt thời gian qua.</div>
                            <div className='font-size-content'>&#127881; Chỉ với một vài thao tác đơn giản trên ứng dụng, Khách hàng đã tìm được Dịch vụ Vệ sinh Sofa uy tín, chuyên nghiệp với nhiều ưu đãi hấp dẫn.</div>
                            <div className='font-size-content'>&#127881; Hiện tại JupSofa - Dịch vụ Sofa cung cấp dịch vụ tại Hà Nội, Tp.Hồ Chí Minh, Hải Phòng</div>
                        </div>
                    </div>
                    <div className='container-service'>
                        <div className='container-service-one'>
                            <div className='font-size-header'><b>Tại sao cần phải vệ sinh sofa thường xuyên</b></div>
                            <div className='font-size-content'>&#9989; Loại bỏ các loại vi khuẩn gây bệnh tích tụ lâu ngày </div>
                            <div className='font-size-content'>&#9989; Giữ cho ghế Sofa luôn mới</div>
                            <div className='font-size-content'>&#9989; Nâng cao tuổi thọ Sofa, tiết kiệm chi phí thay đổi</div>
                        </div>
                        <div className='container-service-two'>
                            <img src={sofa3} style={{ width: '80%', height: '80%', marginBottom: '5%', borderRadius: '25px' }} />
                        </div>
                    </div>
                    <div className='container-service-money'>
                        <b>Bảng giá dịch vụ làm sạch sofa tại nhà</b>
                    </div>
                    <div className='container-service-table'>
                        <table>
                            <tr>
                                <th>Loại sofa</th>
                                <th>Hà Nội</th>
                                <th>Hồ Chí Minh</th>
                            </tr>
                            <tr>
                                <td>Sofa nỉ</td>
                                <td>200-300k/bộ</td>
                                <td>300-400K/bộ</td>
                            </tr>
                            <tr>
                                <td>Sofa da</td>
                                <td>450-550k/bộ</td>
                                <td>350-450k/bộ</td>
                            </tr>
                        </table>
                    </div>
                    <div className='coment'>(Giá mang tính chất tham khảo, để biết chi tiết giá trong giai đoạn Tết Nhâm Dần 2022, khách hàng vui lòng liên hệ Hotline 1900 6082 để được tư vấn).</div>
                    <div className='quytrinh'>
                        <b>Quy trình làm sạch sofa tại nhà</b>
                    </div>
                    <div className='tabs'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Quy trình làm sạch sofa da tại nhà">
                                <div className='sofada-sofa'>
                                    <div className='sofada'>
                                        <img src={sofada} style={{ width: '80%', height: '80%', borderRadius: '25px' }} />
                                    </div>
                                    <div className='sofa'>
                                        <img src={sofa5} style={{ width: '80%', height: '80%', borderRadius: '25px' }} />
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Quy trình làm sạch sofa nỉ tại nhà">
                                <div className='sofada-sofa'>
                                    <div className='sofada'>
                                        <img src={sofani} style={{ width: '80%', height: '80%', borderRadius: '25px' }} />
                                    </div>
                                    <div className='sofa'>
                                        <img src={sofa4} style={{ width: '80%', height: '80%', borderRadius: '25px' }} />
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='benefit'>
                        <b>Lợi Ích Khi Sử Dụng Dịch Vụ Vệ Sinh Giặt Ghế Sofa Của JupSofa</b>
                    </div>
                    <div className='component-benefit'>
                        <div className='component-benefit-content'>
                            <div className='content-1'>
                                <div className='content-1-1'>
                                    <img src={benefit1} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
                                </div>
                                <div className='content-1-2'>
                                    Nhanh chóng, thuận tiện, chuyên nghiệp khi đặt dịch vụ.
                                </div>

                            </div>
                            <div className='content-1'>
                                <div className='content-1-1'>
                                    <img src={benefit2} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
                                </div>
                                <div className='content-1-2'>
                                    Mức giá hấp dẫn với nhiều chính sách ưu đãi, khuyến mại.
                                </div>
                            </div>
                            <div className='content-1'>
                                <div className='content-1-1'>
                                    <img src={benefit3} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
                                </div>
                                <div className='content-1-2'>
                                    Môi trường sống trong lành cho sức khỏe gia đình
                                </div>
                            </div>
                        </div>
                        <div className='component-benefit-content'>
                            <div className='content-1'>
                                <div className='content-1-1'>
                                    <img src={benefit4} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
                                </div>
                                <div className='content-1-2'>
                                    Công nghệ làm sạch hiện đại, tiên tiến
                                </div>
                            </div>
                            <div className='content-1'>
                                <div className='content-1-1'>
                                    <img src={benefit5} style={{ width: '25%', height: '50%', marginTop: '5%' }} />
                                </div>
                                <div className='content-1-2'>
                                    Hóa chất tẩy rửa an toàn, thân thiện với sức khỏe và môi trường
                                </div>
                            </div>
                            <div className='content-1'>
                                <div className='content-1-1'>
                                    <img src={benefit6} style={{ width: '25%', height: '45%', marginTop: '5%' }} />
                                </div>
                                <div className='content-1-2'>
                                    Kỹ thuật viên được đào tạo chuyên nghiệp, chu đáo, tận tâm
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='guide'>
                        <b>Hướng Dẫn Đặt Dịch Vụ Vệ Sinh Sofa Của JupSofa</b>
                    </div>
                    <div className='guide-one'>
                        JupViec là ứng dụng giúp việc nhà theo giờ kết nối nhu cầu giúp<br /> việc của Khách hàng & Người lao động.
                    </div>
                    <div className='service-booking-instruction'>
                        <div className='image'>
                            <img src={imagephone} style={{ width: '60%', height: '90%', marginTop: '-20px', marginLeft: '40%', borderRadius: '25px' }} />
                        </div>
                        <div className='option1'>
                            <div className='option-one1'>
                                <div className='option-one-img1'>
                                    <img src={iconapp} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text1'>
                                    <b>Chọn dịch vụ Vệ sinh sofa, nệm, rèm, thảm.</b>
                                </div>
                            </div>
                            <div className='option-one1'>
                                <div className='option-one-img1'>
                                    <img src={iconnote} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text1'>
                                    <b>Lần lượt điền thông tin.</b>
                                </div>
                            </div>
                            <div className='option-one1'>
                                <div className='option-one-img1'>
                                    <img src={iconagree} style={{ width: '50%', height: '50%', marginLeft: '20%', marginTop: '10%' }} />
                                </div>
                                <div className='option-one-text1'>
                                    <b>JupSofa sẽ gọi xác nhận.</b>
                                </div>
                            </div>
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
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceOne);

