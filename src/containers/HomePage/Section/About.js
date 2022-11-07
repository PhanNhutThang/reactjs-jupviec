import React, { Component } from 'react';
import { connect } from 'react-redux';
import application from '../../../assets/images/application.png';
import './About.scss';
import Button from 'react-bootstrap/Button';

class About extends Component {

    render() {
        return (
            <>
                <div className='section-about'>
                    <div className='section-about-header'>
                        <b>Giới thiệu dịch vụ giúp việc gia đình</b>
                    </div>
                    <div className='section-about-content'>
                        <div className='section-about-content-left'>
                            <iframe width="85%" height="330px"
                                src="https://www.youtube.com/embed/lN3Z3qAZNhI"
                                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - JUPVIEC.VN - DỊCH VỤ GIÚP VIỆC GIA ĐÌNH"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                        <div className='section-about-content-right'>
                            Ngôi nhà hạnh phúc hơn nhờ giúp việc nhà theo giờ.
                            Chúng tôi có cách làm cho ngôi nhà bạn khiến ai thấy cũng đều ngưỡng mộ.
                            Sau giờ làm việc cực nhọc bạn về nhà, thấy các thành viên đang nói chuyện xôm tụ bên đĩa trái cây ngon lành.
                            Bạn đảo đôi mắt nhìn xung quanh và ngạc nhiên.
                            Đầu tiên là phòng khách rất thơm tho, nền nhà mát rượi, bộ sofa mềm mại, sạch sẽ.
                            Kế đến bạn nhìn nhà bếp, các món ăn trông ngon lành như mời gọi, đi vài bước vào phòng ngủ, gra, áo gối đã thay mới, quần áo được ủi rất đẹp. Chú ý Toilet thì vô cùng sạch sẽ, ngăn nắp.
                        </div>
                    </div>
                </div>
                <div className='section-convenient'>
                    <div className='section-convenient-left'>
                        <div className='section-convent-left-header'>
                            <b>Ứng dụng giúp việc tiện lợi</b>
                        </div>
                        <div className='section-convent-left-content'>&#x1F4A0;    Đặt dịch vụ chỉ với vài bước đơn giản</div>
                        <div className='section-convent-left-content'>&#x1F4A0;    Có thông tin Người giúp việc sẽ đến làm tại nhà</div>
                        <div className='section-convent-left-content'>&#x1F4A0;    Quản lý thời gian, đánh giá chất lượng</div>
                        <div className='section-convent-left-content'>&#x1F4A0;    Quản lý lịch sử, số tiền đã sử dụng</div>
                        <div className='section-convent-left-content'>&#x1F4A0;    Ưu đãi giảm 50K khi đặt qua app lần đầu</div>
                        <div className='right-content-btn'>
                            <Button className='primary' variant="primary">Đặt dịch vụ ngay</Button>
                        </div>
                    </div>
                    <div className='section-convenient-right'>
                        <img src={application} alt="" style={{ width: '450px', height: '580px', marginLeft: '90px', marginBottom: '10px' }} />
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);