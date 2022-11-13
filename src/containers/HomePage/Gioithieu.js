import React, { Component } from 'react';
import { Fragment } from 'react';
import './GioiThieu.scss';
import './Recruit.scss';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Share/Header.js';
import HomeFooter from './HomeFooter';
import bannerGioiThieu from '../../assets/images/bannerGioiThieu.jpg';
import gioithieu01 from '../../assets/images/gioithieu01.jpg';
import bannerdaotao from '../../assets/images/bannerdaotao.jpg'


class GioiThieu extends React.Component {

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <Header />
                    <div>
                        <img src={bannerGioiThieu} style={{ width: '100%', height: '30%', marginTop: '2%' }} />
                    </div>
                    <div className='tabs'>
                        <Tabs
                            defaultActiveKey="gioithieu"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="gioithieu" title="Giới thiệu về JupViec">
                                <div className='text'><b>Giới thiệu về JupViec</b></div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify', marginLeft: '60px', marginRight: '60px' }}>Công ty cổ phần phát triển dịch vụ nhà sạch HMC - Tên thương hiệu: JupViec.vn là công ty công nghệ cung cấp nền tảng kết nối nhu cầu giúp việc của Khách hàng và Người lao động. Thành lập năm 2012, JupViec.vn hiện đang tạo ra việc làm cho hơn 3.000 lao động giúp việc, đáp ứng nhu cầu của hơn 200.000 Khách hàng, phục vụ tại 8 tỉnh thành trên cả nước: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Nha Trang, Hải Phòng, Quảng Ninh, Bình Dương, Bắc Ninh. </div>
                                <div className='sumenh' style={{ color: ' #808080', fontSize: '30pt', textAlign: 'center' }}>
                                    Sứ mệnh của chúng tôi: "Thay đổi cuộc sống phụ nữ Việt"
                                </div>

                                <div className='container-sumenh'>
                                    <div className='container-sumenh-one'>
                                        <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>Chúng tôi mong muốn tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt, bao gồm cả những người phụ nữ thành thị hiện đại bận rộn và những người phụ nữ tại các làng quê Việt Nam.
                                            <div style={{ textAlign: 'left', fontStyle: 'italic', marginTop: '10px' }} >- Phụ nữ nông thôn nghèo sẽ có công việc và thu nhập tốt.</div>
                                            <div style={{ textAlign: 'left', fontStyle: 'italic' }} >- Phụ nữ thành thị sẽ có thêm thời gian rảnh rỗi chăm lo cho gia đình và tạo ra nhiều giá trị hơn cho xã hội.</div>
                                        </div>
                                    </div>
                                    <div className='container-sumenh-two'>
                                        <img src={gioithieu01} style={{ width: '60%', height: '70%', borderRadius: '50px', marginLeft: '100px' }} />
                                    </div>
                                </div>

                                <div className='sumenh' style={{ color: ' #808080', fontSize: '22pt', textAlign: 'lefts' }}>
                                    Công nghệ:
                                </div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>Áp dụng công nghệ hiện đại thông qua ứng dụng kết nối giữa Khách hàng và Người giúp việc, giúp cho việc kết nối được mọi lúc mọi nơi, nhanh chóng, đồng thời quản lý chất lượng dịch vụ ở quy mô lớn.</div>

                                <div className='sanpham' style={{ color: ' #808080', fontSize: '22pt', textAlign: 'lefts' }}>
                                    Sản phẩm:
                                </div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>- Giúp việc nhà theo giờ: Giúp việc nhanh, Giúp việc định kỳ thường xuyên</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>- Tổng vệ sinh: Dọn toàn bộ nhà cửa, sạch từng khe kẽ</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>- JupSofa: Làm sạch sofa, thảm, nệm, rèm cửa…</div>

                                <div className='chungnhan' style={{ color: ' #808080', fontSize: '22pt', textAlign: 'lefts' }}>
                                    Giải thưởng & Chứng nhận:
                                </div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;2015: Công ty đầu tiên và duy nhất trong lĩnh vực lao động phổ thông nhận được đầu tư từ Quỹ đầu tư Nhật Bản CyberAgent Ventures</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;2016: Top 2 Startup Việt 2016 do báo VnExpress tổ chức vinh danh Doanh nghiệp phát triển bền vững,  hữu ích về Kinh tế Xã hội.</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;Giải thưởng “Ứng dụng tiềm năng" từ FacebookStart - Chương trình chọn lọc hỗ trợ các ứng dụng khởi nghiệp có tăng trưởng đột phá</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;2017: Nhận đầu tư từ Quỹ đầu tư Mỹ Patamar Capital</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;2018: Giải thưởng “Tài chính toàn diện" của VISA's Everywhere Initiative</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;2019: Nhận tài trợ từ Bộ Ngoại giao Hoa Kỳ với dự án “Ứng dụng công nghệ Blockchain"</div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify' }}>&#127881;Đại diện duy nhất của Việt Nam lọt Top khởi nghiệp toàn châu Á tại Echelon Asia Summit 2019</div>

                            </Tab>

                            <Tab eventKey="daotao" title="Quy trình đào tạo">
                                <div className='text'><b>Quy trình đào tạo</b></div>
                                <div className='noidungDaoTao'>
                                    <b>1. Nhận thông tin ứng viên</b><br></br>
                                    <a>- Ứng viên tự liên hệ ứng tuyển</a><br></br>
                                    <a>- Các đối tác Tuyển dụng chuyển lên</a><br></br>
                                    <b>2. Tiếp nhận hồ sơ ứng viên và phỏng vấn</b><br></br>
                                    <i>2.1 Tiếp nhận đầy đủ hồ sơ</i><br></br>
                                    <a>- Chứng minh thư</a><br></br>
                                    <a>- Giấy xác nhận nhân sự</a><br></br>
                                    <a>- Hộ khẩu</a><br></br>
                                    <i>2.2 Phỏng vấn</i><br></br>
                                    <a>- Xác định làm việc lâu dài</a><br></br>
                                    <a>- Nhân trắc học, thẳng thắn, thật thà, đủ sức khoẻ</a><br></br>
                                    <b>3. Đào tạo</b><br></br>
                                    <i>3.1. Lý thuyết </i><br></br>
                                    <a>- Tác phong, kĩ năng của JupViec 5* </a><br></br>
                                    <a>- Hướng dẫn sử dụng ứng dụng NVGV</a><br></br>
                                    <a>- Hướng dẫn toàn trình một ca làm việc tiêu chuẩn</a><br></br>
                                    <i>3.2. Thực hành</i><br></br>
                                    <a>- Kĩ năng dọn dẹp, sắp xếp</a><br></br>
                                    <a>- Các kĩ năng khác</a><br></br>
                                    <b>4. Ký hợp đồng</b><br></br>
                                    <a>- Nhập thông tin ứng viên lên hệ thống</a><br></br>
                                    <a>- Sắp xếp lịch, theo dõi, đánh giá ứng viên</a><br></br>

                                </div>
                                <div>
                                    <img src={bannerdaotao} style={{ width: '100%', height: '5%', marginTop: '3px' }} />
                                </div>
                            </Tab>
                            <Tab eventKey="dieukhoan" title="Điều khoản sử dụng dịch vụ">
                                <div className='text'><b>Điều khoản sử dụng</b></div>
                                <div className='noidungGioiThieu' style={{ textAlign: 'justify', marginLeft: '60px', marginRight: '60px' }}>Các Điều khoản dưới đây (“Điều khoản”) điều chỉnh việc Khách hàng, một cá nhân hoặc tổ chức, truy cập hoặc sử dụng các ứng dụng, trang web, nội dung, sản phẩm và dịch vụ (“Dịch vụ”) của CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ NHÀ SẠCH HMC, một doanh nghiệp thành lập theo pháp luật Việt Nam, được Sở Kế hoạch Đầu tư Hà Nội cấp Giấy Chứng nhận đăng ký doanh nghiệp số 0106056281 ngày 06 tháng 12 năm 2012 (“Công ty”).</div>
                                <div className='noidungGioiThieu' style={{ marginTop: '25pt', fontSize: '17pt', marginTop: '15pt' }}>VUI LÒNG ĐỌC KỸ CÁC ĐIỀU KHOẢN NÀY TRƯỚC KHI TRUY CẬP HOẶC SỬ DỤNG DỊCH VỤ.</div>
                                <div className='noidungCamKet' style={{ color: 'black', fontSize: '15pt' }}>Điều 1: Cam kết thực hiện:</div>
                                <div className='noidungCamKet'>1.1. Các Bên cam kết thực hiện đúng và đầy đủ các nghĩa vụ trong Hợp đồng.</div>
                                <div className='noidungCamKet'>1.2. Trong quá trình thực hiện Hợp đồng, nếu có phát sinh vấn đề ảnh hưởng đến quyền lợi của các Bên, Bên bị ảnh hưởng phải thông báo cho Bên kia trong thời hạn 24 giờ kể từ lúc phát sinh vấn đề.</div>
                                <div className='noidungCamKet'>1.3. Các Bên cam kết tôn trọng quyền lợi chính đáng của nhau, cam kết không tiết lộ thông tin Hợp đồng cho bất kỳ Bên thứ 3 nào khác.</div>
                                <div className='noidungCamKet'>4.4. Trường hợp Khách hàng giao chìa khóa cho đối tác giúp việc để thực hiện công việc, Khách hàng cam kết hành vi này của Khách hàng không tạo ra quan hệ gửi giữ tài sản giữa Khách hàng và Công ty. Công ty sẽ được miễn mọi trách nhiệm phát sinh trong trường hợp này.</div>

                                <div className='noidungCamKet' style={{ color: 'black', fontSize: '15pt', marginTop: '15pt' }}>Điều 2: Bất khả kháng:</div>
                                <div className='noidungCamKet'>Các bên được miễn trách nhiệm thực hiện nghĩa vụ của mình được quy định trong Hợp đồng trong các trường hợp sau: </div>
                                <div className='noidungCamKet'>2.1. Trong các trường hợp Bất khả kháng (thiên tai, dịch họa, động đất, chiến tranh…) theo như quy định của pháp luật Việt Nam, các Bên sẽ được miễn trách nhiệm thực hiện nghĩa vụ của mình được quy định trong Hợp đồng.</div>
                                <div className='noidungCamKet'>2.2. Một trong hai bên bị phá sản, tuyên bố phá sản, mất khả năng thanh toán.</div>

                                <div className='noidungCamKet' style={{ color: 'black', fontSize: '15pt', marginTop: '15pt' }}>Điều 3: Giải quyết tranh chấp và khiếu nại:</div>
                                <div className='noidungCamKet'>3.1. Khi xảy ra mâu thuẫn, tranh chấp, hai Bên sẽ ưu tiên tiến hành giải quyết thông qua việc tự thương lượng, hòa giải, trên tinh thần hỗ trợ lẫn nhau.</div>
                                <div className='noidungCamKet'>3.2. Nếu hai Bên không giải quyết được mâu thuẫn, tranh chấp theo quy định tại Điều 6, mục 6.1 của Hợp đồng này thì mọi mẫu thuẫn, tranh chấp sẽ được đưa ra giải quyết tại Tòa án Nhân dân có thẩm quyền.</div>




                            </Tab>
                        </Tabs>
                    </div>
                    {<HomeFooter />}
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

export default connect(mapStateToProps, mapDispatchToProps)(GioiThieu);

