import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Commit.scss';
import HomeFooter from './HomeFooter';
import Header from '../../components/Share/Header.js';

class Commit extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div className='home-header-container'>
                    <div className='camket1'>
                        <b>Cam kết của JupViec</b>
                    </div>
                    <div className='content1'>
                        <div className='text-I1'>
                            I. CHÍNH SÁCH BẢO HÀNH
                        </div>
                        <div>&#x1F54A; JupViec cam kết tất cả các đơn hàng giúp việc theo giờ được cung cấp bởi JupViec.vn là đơn hàng được đảm bảo về chất lượng.</div>
                        <div className='text-11'>
                            1. Chính sách bảo hành chất lượng dịch vụ
                        </div>
                        <div className='text-a1'>
                            &#128312; Khi Quý khách không hài lòng về chất lượng ca làm việc của nhân viên giúp việc, JupViec.vn sẽ bảo hành toàn bộ ca làm. JupViec.vn sẵn sàng làm sạch lại các khu vực Quý khách chưa hài lòng và không tính thêm phí.
                        </div>
                        <div className='text-a1'>
                            &#128312; Điều kiện bảo hành: Khách hàng phản hồi dịch vụ trong vòng 24h, kể từ thời điểm kết thúc ca làm và đánh giá 1 sao hoặc 2 sao về ca làm đó trên ứng dụng JupViec.
                        </div>
                        <div className='text-11'>
                            2. Chính sách hỗ trợ đền bù tổn thất tài sản
                        </div>
                        <div className='text-a1'>
                            &#128313; Về tổn thất do hư hỏng và đổ vỡ: Trong trường hợp nhân viên thực hiện dịch vụ của JupViec.vn làm hư hỏng hoặc đổ vỡ tài sản của Khách hàng, JupViec.vn sẽ xác định trách nhiệm đền bù theo các thông tin được xác thực.
                        </div>
                        <div className='text-a1'>
                            &#128313; Về tổn thất do mất trộm, mất cắp: Trường hợp có xác nhận bằng văn bản của cơ quan chức năng về việc nhân viên thực hiện dịch vụ lấy trộm đồ của Khách hàng. Nhân viên giúp việc có trách nhiệm đền bù tổn thất theo Quy định của Pháp luật. JupViec.vn cam kết cung cấp đầy đủ thông tin và các trách nhiệm liên quan theo yêu cầu của Cơ quan chức năng.
                        </div>
                        <div className='text-I1'>
                            II. CHÍNH SÁCH ĐỔI NHÂN VIÊN VÀ HOÀN TIỀN
                        </div>
                        <div className='text-11'>
                            1. Chính sách đổi nhân viên giúp việc
                        </div>
                        <div className='text-a1'>
                            &#128261; Khách hàng được đổi Nhân viên trong gói Giúp việc Định kỳ khi không hài lòng với chất lượng của Nhân viên, dù đã thực hiện bảo hành.
                        </div>
                        <div className='text-a1'>
                            &#128261; Điều kiện đổi nhân viên:
                        </div>
                        <div className='text-a1'>
                            &#128261; Khách hàng phản hồi dịch vụ và đánh giá 1 sao hoặc 2 sao trên ứng dụng JupViec sau khi kết thúc ca làm của nhân viên muốn đổi
                        </div>
                        <div className='text-a1'>
                            &#128261; Thời gian tuyển và đào tạo nhân viên thay thế để đổi Nhân viên từ 7-10 ngày. Trong thời gian này, JupViec sẽ sắp xếp Nhân viên lẻ đến làm việc tại nhà Khách hàng.
                        </div>
                        <div className='text-a1'>
                            &#128261; Số lần đổi Nhân viên: Không quá 02 lần với hợp đồng 6 tháng, quá 03 lần với hợp đồng 12 tháng.
                        </div>
                        <div className='text-1'>
                            2. Chính sách hoàn tiền
                        </div>
                        <div className='text-a1'>
                            &#x1F4A7; Tất cả các đơn hàng của JupViec.vn là đơn hàng không hoàn tiền.
                        </div>
                        <div className='text-a1'>
                            &#x1F4A7; Đơn hàng được hoàn lại toàn bộ hoặc một phần số tiền đã thanh toán trong các trường hợp:
                        </div>
                        <div className='text-a1'>
                            &#x1F4A7; JupViec không thể cung cấp nhân viên theo thời gian Quý khách yêu cầu (nằm trong khung giờ quy định của JupViec: 8h-12h, 13-17h, 17h- 21h hàng ngày).
                        </div>
                        <div className='text-a1'>
                            &#x1F4A7; Khách hàng sử dụng dịch vụ bị đổi Nhân viên cố định quá số lần quy định theo cam kết chất lượng của JupViec (quá 02 lần với hợp đồng 6 tháng, quá 03 lần với hợp đồng 12 tháng).
                        </div>
                        <div className='text-a1'>
                            &#x1F4A7; Thời gian hoàn tiền:
                        </div>
                        <div className='text-a1'>
                            &#x1F4A7; Thời gian hoàn tiền phụ thuộc vào phương thức thanh toán của Khách hàng (tính từ thời điểm JupViec.vn xác nhận đơn hàng đủ điều kiện hoàn tiền)
                        </div>
                        <div >
                            &#x1F4B1; Chuyển khoản: 1-3 ngày làm việc
                        </div>
                        <div >
                            &#128181; Thanh toán online qua ứng dụng ví điện tử MoMo: 3-5 ngày làm việc
                        </div>
                        <div>
                            &#128181; Thanh toán online qua Viettel Pay & VNPay: 9-12 ngày làm việc
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

export default connect(mapStateToProps, mapDispatchToProps)(Commit);
