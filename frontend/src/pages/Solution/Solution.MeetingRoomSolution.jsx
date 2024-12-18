import React from 'react'
import { assets } from '../../assets/assets';
import "./Solution.MeetingRoomSolution.css"
import Notification from "../../components/Notification/Notification";


const MeetingRoomSolution = () => {
    return (
        <div sol-all-content>
            <Notification />
            <div className='meet-section-0 meet-section'>
                <img src={assets.meeting1} alt="meeting1" />
            </div>

            <div className='meet-section-1 meet-section'>
                <div className="meet-container">
                    <div>
                        <img src={assets.meeting2} alt="meeting2" />
                    </div>
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
            </div>

            <div className='meet-section-2 meet-section'>
                <div className="meet-container">
                    <h1>GIẢI PHÁP NÀY DÀNH CHO AI</h1>
                    <p>SIEGenX tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông minh tại Việt Nam</p>
                    <div className='meet-section-2-child'>
                        <div>
                            <img src={assets.meeting4} alt="meeting4" />
                            <h2>DÀNH CHO DOANH NGHIỆP</h2>
                            <p>Tăng tính tương tác linh hoạt giữa các thành viên, không giới hạn không gian, thời gian.
                                Tài liệu được gửi lên trước khi họp trên phần mềm, thành viên tham dự có thời gian nghiên cứu trước,
                                giảm thời gian họp, nâng cao chất lượng cuộc họp.</p>
                        </div>

                        <div>
                            <img src={assets.meeting5} alt="meeting5" />
                            <h2>DÀNH CHO CHÍNH PHỦ</h2>
                            <p>Hệ thống an toàn thông tin luôn được đảm bảo, không giới hạn không gian, thời gian và khoảng cách địa lý.
                                Tự tổng hợp chính xác, đầy đủ các nội dung ý kiến của các đại biểu cho thư ký cuộc họp. </p>
                        </div>


                        <div>
                            <img src={assets.meeting6} alt="meeting6" />
                            <h2>DÀNH CHO HỘI NGHỊ KHÁC</h2>
                            <p>Giúp dễ dàng theo dõi toàn bộ nội dung, diễn biến cuộc họp.
                                Dễ dàng tra cứu tài liệu họp đối với các cuộc họp đã kết thúc nếu có tài khoản tham dự.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='meet-section-3 meet-section'>
                <div className="meet-container">
                    <h1>THỰC TRẠNG CHUNG</h1>
                    <div>
                        <img src={assets.meeting7} alt="meeting7" />
                        <div>
                            <h2>NHỮNG CUỘC HỌP NHÀM CHÁN VÀ KHÔNG HIỆU QUẢ</h2>
                            <div>
                                <div className='sol-box'>
                                    <i class="fa-solid fa-check"></i>
                                    <p><strong>Trước cuộc họp: </strong>
                                        Vận hành phức tạp nhiều thiết bị dẫn đến hiệu quả công việc thấp.
                                    </p>
                                </div>

                                <div className='sol-box'>
                                    <i class="fa-solid fa-check"></i>
                                    <p><strong>Trong cuộc họp: </strong>Khó thu nhập và ghi chép dữ liệu khi họp, khó đảm
                                        bảo tính chính xác và toàn vẹn của dữ liệu. </p>
                                </div>

                                <div className='sol-box'>
                                    <i class="fa-solid fa-check"></i>
                                    <p><strong>Sau cuộc họp: </strong>Khó truy vấn dữ liệu diễn ra trong cuộc họp đồng thời nguy cơ rò rỉ thông tin cao.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='meet-section-4 meet-section'>
                {/* <a href="/"><span>LIÊN HỆ</span></a> */}
                <div className='meet-container'>
                    <h1>THIẾT BỊ & SẢN PHẨM</h1>
                    <div class="sp-row">
                        <div class="sp-col">
                            <div className='sp'>
                                <img src={assets.productClass1} alt="productclass1" />
                                <a href="/" className='buy'><i class="fa-solid fa-cart-shopping"></i></a>
                                <h5>Màn Hình Tương Tác Thông Minh SIEGenX 75inch 4k SGX -1T75</h5>
                                <div>
                                    <a href="/">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/">
                                        <span>XEM NGAY</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="sp-col">
                            <div className="sp">
                                <img src={assets.productClass2} alt="productclass2" />
                                <a href="/" className='buy'><i class="fa-solid fa-cart-shopping"></i></a>
                                <h5>Màn Hình Tương Tác Thông Minh SIEGenX 75inch 4k SGX -1T75</h5>
                                <div>
                                    <a href="/">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/">
                                        <span>XEM NGAY</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="sp-col">
                            <div className="sp">
                                <img src={assets.productClass3} alt="productclass3" />
                                <a href="/" className='buy'><i class="fa-solid fa-cart-shopping"></i></a>
                                <h5>Màn Hình Tương Tác Thông Minh SIEGenX 75inch 4k SGX -1T75</h5>
                                <div>
                                    <a href="/">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/">
                                        <span>XEM NGAY</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="sp-col">
                            <div className="sp">
                                <img src={assets.productClass4} alt="productclass4" />
                                <a href="/" className='buy'><i class="fa-solid fa-cart-shopping"></i></a>
                                <h5>Màn Hình Tương Tác Thông Minh SIEGenX 75inch 4k SGX -1T75</h5>
                                <div>
                                    <a href="/">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/">
                                        <span>XEM NGAY</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <section id='section-lh-gp' className='meet-section-5 meet-section'>
                <div className='section-lh-left'>
                    <img src={assets.meeting10} alt="meeting10" />
                </div>
                <div className='section-lh-right'>
                <h2>LIÊN HỆ ĐĂNG KÝ</h2>
                <div className='form-lienhe'>
                    <form action="" className='sol-form'>
                            <div>
                                <input className='sol-input' type="text" placeholder='Họ tên' name='sol-name' />
                                <input className='sol-input' type="text" placeholder='Số điện thoại' name='sol-sdt' />
                            </div>
                            <textarea className="sol-input" name="sol-des" placeholder='Nội dung'></textarea>
                            <div className='btn-send-lh'>
                                <input className='sol-input' type="submit" value="Gửi đi" name='sol-submit' />
                            </div>
                    </form>
                </div>
                    
                </div>

            </section>
        </div>
    )
}

export default MeetingRoomSolution