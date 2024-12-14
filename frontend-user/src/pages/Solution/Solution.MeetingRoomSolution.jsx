import React from 'react'
import { assets } from '../../assets/assets';
import "./Solution.MeetingRoomSolution.css"

const MeetingRoomSolution = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <div>
                        <hr />
                        <h1>PHÒNG HỌP THÔNG MINH LÀ GÌ</h1>
                    </div>
                    {/* <p>Phòng họp thông minh là không gian hội họp không cần giấy tờ, giúp tiết kiệm tài nguyên và tăng tính hiệu quả trong
                        việc chia sẻ tài liệu. Người dùng có thể dễ dàng tự động điều khiển tất cả các thiết bị điện tử
                        trong phòng họp ngay trên máy tính như: cửa, rèm, đèn, máy lạnh, thiết bị hội nghị truyền hình,
                        màn hình, máy chiếu, màn chiếu, và các thiết bị âm thanh. Với màn hình lớn hiển thị rõ ràng, hệ thống micro
                        cho âm thanh sắc nét, và camera hỗ trợ ghi hình cũng như kết nối từ xa, phòng họp thông minh mang lại trải nghiệm chuyên nghiệp
                        và thuận tiện cho doanh nghiệp.</p> */}
                </div>
            </div>

            <img src={assets.meeting1} alt="meeting1" />

            <div className='container section1'>
                <img src={assets.meeting2} alt="meeting2" />
                <div>
                    <h1>GIẢI PHÁP NÀY GIÚP GÌ CHO BẠN</h1>
                    <p>
                        Giải pháp phòng họp thông minh mang đến nhiều lợi ích thiết thực cho doanh nghiệp,
                        giúp nâng cao hiệu quả làm việc và tạo ra trải nghiệm hội họp chuyên nghiệp.
                        Với khả năng điều khiển tự động các thiết bị trong phòng như đèn, máy lạnh, màn hình và hệ thống âm thanh,
                        người dùng có thể dễ dàng chuẩn bị và quản lý cuộc họp chỉ với một vài thao tác đơn giản.
                    </p>
                    <p>
                        Hơn nữa, phòng họp không giấy tờ giúp tiết kiệm chi phí in ấn và bảo vệ môi trường,
                        trong khi các thiết bị hiện đại như màn hình lớn và hệ thống hội nghị truyền hình hỗ trợ giao tiếp rõ ràng, mượt mà,
                        kết nối dễ dàng từ xa. Giải pháp này không chỉ nâng cao hiệu suất công việc mà còn tạo ra không gian làm việc hiện đại, thân thiện,
                        và chuyên nghiệp.
                    </p>
                    <a href="/"><span>LIÊN HỆ</span></a>
                </div>
            </div>

            <div className='section2'>
                <div className="container">
                    <h1>GIẢI PHÁP NÀY DÀNH CHO AI</h1>
                    <p>SIEGenX tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông minh tại Việt Nam</p>
                    <div className='section2-child'>
                        <div>
                            <img src={assets.meeting4} alt="meeting4" />
                            <h3>DÀNH CHO DOANH NGHIỆP</h3>
                            <p>Tăng tính tương tác linh hoạt giữa các thành viên, không giới hạn không gian, thời gian.
                                Tài liệu được gửi lên trước khi họp trên phần mềm, thành viên tham dự có thời gian nghiên cứu trước,
                                giảm thời gian họp, nâng cao chất lượng cuộc họp.</p>
                        </div>

                        <div>
                            <img src={assets.meeting5} alt="meeting5" />
                            <h3>DÀNH CHO CHÍNH PHỦ</h3>
                            <p>Hệ thống an toàn thông tin luôn được đảm bảo, không giới hạn không gian, thời gian và khoảng cách địa lý.
                                Tự tổng hợp chính xác, đầy đủ các nội dung ý kiến của các đại biểu cho thư ký cuộc họp. </p>
                        </div>


                        <div>
                            <img src={assets.meeting6} alt="meeting6" />
                            <h3>DÀNH CHO HỘI NGHỊ KHÁC</h3>
                            <p>Giúp dễ dàng theo dõi toàn bộ nội dung, diễn biến cuộc họp.
                                Dễ dàng tra cứu tài liệu họp đối với các cuộc họp đã kết thúc nếu có tài khoản tham dự.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-3 container'>
                <h1>THỰC TRẠNG CHUNG</h1>
                <div className='section-3-child'>
                    <img src={assets.meeting7} alt="meeting7" />
                    <div>
                        <h4>NHỮNG CUỘC HỌP NHÀM CHÁN VÀ KHÔNG HIỆU QUẢ</h4>
                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Trước cuộc họp: </strong>
                                Vận hành phức tạp nhiều thiết bị dẫn đến hiệu quả công việc thấp.
                            </p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Trong cuộc họp: </strong>Khó thu nhập và ghi chép dữ liệu khi họp, khó đảm
                                bảo tính chính xác và toàn vẹn của dữ liệu. </p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Sau cuộc họp: </strong>Khó truy vấn dữ liệu diễn ra trong cuộc họp đồng thời nguy cơ rò rỉ thông tin cao.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-4'>
                <h2>GIẢI PHÁP CÓ GÌ</h2>
            </div>

            <img src={assets.meeting8} alt="meeting8" className='section-5'/>

            <div className='section-6 container'>
                <a href="/"><span>LIÊN HỆ</span></a>
                <h1>THIẾT BỊ & SẢN PHẨM</h1>
                <img src={assets.meeting8} alt="meeting9" />
            </div>

            <div className='section-7'>
                <img src={assets.meeting10} alt="meeting10" />
                <div>
                    <h2>LIÊN HỆ ĐĂNG KÝ</h2>
                    <form action="">
                        <div>
                            <input type="text" placeholder='Họ tên' name='name'/>
                            <input type="text" placeholder='Số điện thoại' name='sdt'/>
                        </div>
                        <input type="text" placeholder='Nội dung' name='des' />
                        <input type="submit" value="Gửi đi" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MeetingRoomSolution
