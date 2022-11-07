import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Recruit.scss';
import HomeFooter from './HomeFooter';
import Header from '../../components/Share/Header.js';
import recruit from '../../assets/images/recruit.jpg';
import bannerkhuyenmai from '../../assets/images/bannerkhuyenmai.jpg';
import bannernoithat from '../../assets/images/bannernoithat.jpg';
import bannermonan from '../../assets/images/bannermonan.jpg';
import bannerhallowen from '../../assets/images/bannerhallowen.jpg';
import bannerfastion from '../../assets/images/bannerfastion.jpg';
import bannercongviec from '../../assets/images/bannercongviec.jpg';
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
                            <img src={bannerkhuyenmai} style={{ width: '100%', height: '100%' }} /></Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/cap-nhat-ctkm-12" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>CẬP NHẬT CHƯƠNG TRÌNH KHUYẾN MÃI THÁNG 12</b></div>
                                <div className='content-text'>Tháng 12 với bao nhiêu điều phải lo bao nhiêu việc phải làm đã bắt đầu. Thôi thì để JupViec đỡ đần việc nhà của bạn có thêm thời gian rảnh làm những chuyện quan trọng hơn trong cuộc sống nhé!
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>

                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/nhung-mon-an-ngon">
                                <img src={bannermonan} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/nhung-mon-an-ngon" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>NHỮNG MÓN ĂN NGON NÊN THƯỞNG THỨC VÀO MÙA ĐÔNG</b></div>
                                <div className='content-text'>Ngoài việc giữ ấm cơ thể vào mùa đông các chị em còn quan tâm đến việc mặc làm sao cho thời trang, nhưng nếu kết hợp trang phục không phù hợp sẽ làm bạn kém duyên hơn đấy. Bạn có thể tham khảo một số tips phối đồ dành cho mùa đông đẹp và đơn giản dưới đây.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/meo-can-bang-cong-viec">
                                <img src={bannercongviec} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/meo-can-bang-cong-viec" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>MẸO CÂN BẰNG CUỘC SỐNG VÀ CÔNG VIỆC</b></div>
                                <div className='content-text'>Cuộc sống và công việc là đều là hai giá trị quan trọng của cuộc đời mỗi người, không thể nào sống mà thiếu đi một trong hai và chúng ta thường gặp vấn đề giữa việc cân bằng thời gian cho cả hai.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/le-hoi-halloween">
                                <img src={bannerhallowen} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/le-hoi-halloween" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>CÁC MÓN ĂN VÀO NGÀY LỄ HALLOWEN</b></div>
                                <div className='content-text'>Halloween bắt nguồn từ niềm tin rằng ranh giới của người sống và người chết sẽ bị xóa nhòa vào đêm cuối cùng của tháng 10. Ngày 31 tháng 10 này các linh hồn xấu xa, ma quỷ và phù thủy có thể tự do lang thang trên mặt đất. Cách duy nhất để tránh khỏi sự quấy nhiễu của chúng là cung cấp những món ăn và đồ ngọt hay cải trang thành một trong số chúng.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/phong-cach-thiet-ke-noi-that">
                                <img src={bannernoithat} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/phong-cach-thiet-ke-noi-that" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>PHONG CÁCH THIẾT KẾ NỘI THẤT XUẤT SĂC BẠN CẦN BIẾT</b></div>
                                <div className='content-text'>Có rất nhiều phong cách thiết kế để không gian sống phù hợp với tính cách và sở thích của bạn hơn. Tương ứng với mỗi thiết kế sẽ có cách chọn đồ nội thất khác nhau, và thảm trang trí là một vật trang trí rất quan trọng giúp định hình phong cách không gian. Vì vậy cần lưu ý phối hợp nội thất cho phù hợp từng phong cách thiết kế đó.
                                    <div className='footer-text' style={{ color: 'blue' }}>&#128073; Xem thêm tại đây!!!</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-image'>
                            <Link to="/phong-cach-an-mac-cuc-dep">
                                <img src={bannerfastion} style={{ width: '100%', height: '100%' }} />
                            </Link>
                        </div>
                        <div className='content-text'>
                            <Link to="/phong-cach-an-mac-cuc-dep" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className='header-text'><b>NHỮNG PHONG CÁCH ĂN MẶC CỰC ĐẸP VÀO MÙA ĐÔNG</b></div>
                                <div className='content-text'>Ngoài việc giữ ấm cơ thể vào mùa đông các chị em còn quan tâm đến việc mặc làm sao cho thời trang, nhưng nếu kết hợp trang phục không phù hợp sẽ làm bạn kém duyên hơn đấy. Bạn có thể tham khảo một số tips phối đồ dành cho mùa đông đẹp và đơn giản dưới đây.
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
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recruit);
