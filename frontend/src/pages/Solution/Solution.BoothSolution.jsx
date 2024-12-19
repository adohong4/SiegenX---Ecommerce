import React from 'react'
import Notification from "../../components/Notification/Notification";
import { assets } from '../../assets/assets';
import "./Solution.BoothSolution.css"

const BoothSolution = () => {
    return (
        <div>
            <Notification />


            <div className="booth-section-0">
                <img src={assets.booth1} alt="booth1" />
            </div>
            <div className='meet-section-1 meet-section'>
                <div className="meet-container">
                    <div>
                        <img src={assets.class2} alt="meeting2" />
                    </div>
                    <div>
                        <h1>GIẢI PHÁP NÀY GIÚP GÌ CHO BẠN</h1>
                        <p>
                            Giải pháp phòng học thông minh mang lại nhiều lợi ích thiết thực cho giáo viên và học sinh.
                            Đầu tiên, nó tạo ra một môi trường học tập tương tác, giúp tăng cường sự hứng thú và động lực học tập.
                            Với các thiết bị hiện đại như màn hình tương tác và máy chiếu, nội dung bài giảng trở nên hấp dẫn và dễ tiếp thu hơn.
                        </p>
                        <p>
                            Thứ hai, phòng học thông minh giúp giáo viên tiết kiệm thời gian chuẩn bị và giảng dạy,
                            cho phép họ sử dụng các ứng dụng số để trình bày và chia sẻ thông tin một cách nhanh chóng và hiệu quả.
                        </p>
                        <p>
                            Cuối cùng, giải pháp này hỗ trợ việc theo dõi và đánh giá quá trình học tập, giúp giáo viên nhận biết sự tiến bộ của học sinh
                            và điều chỉnh phương pháp giảng dạy phù hợp. Tất cả những điều này góp phần nâng cao chất lượng giáo dục một cách rõ rệt.
                        </p>
                        <a href="/"><span>LIÊN HỆ</span></a>
                    </div>
                </div>
            </div>

            <div className='meet-section-2 booth-section'>
                <div className="meet-container">
                    <h1>GIẢI PHÁP GIAN HÀNG THÔNG MINH DÀNH CHO AI</h1>
                    <p>SIEGenX tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông minh tại Việt Nam</p>
                    <div className='meet-section-2-child'>
                        <div>
                            <img src={assets.booth3} alt="class4" />
                            <h2>KHÁCH HÀNG CÁ NHÂN</h2>
                            <p>Gian hàng thông minh phục vụ mọi khách hàng muốn có trải nghiệm mua sắm nhanh chóng, tiện lợi</p>
                        </div>

                        <div>
                            <img src={assets.booth4} alt="class5" />
                            <h2>DOANH NGHIỆP BÁN LẺ</h2>
                            <p>Các doanh nghiệp bán lẻ như siêu thị, cửa hàng tiện lợi, chuỗi bán lẻ, hoặc nhà bán hàng </p>
                        </div>


                        <div>
                            <img src={assets.booth5} alt="class6" />
                            <h2>CHÍNH PHỦ VÀ CỘNG ĐỒNG</h2>
                            <p>Các tổ chức công cộng cũng có thể triển khai mô hình gian hàng thông minh</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='meet-section-3 booth-section'>
                <div className="meet-container">
                    <h1>THỰC TRẠNG CHUNG</h1>
                    <div className='meet-section-3-child'>
                        <img src={assets.booth6} alt="booth6" />
                        <div>
                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>MỨC ĐỘ PHỔ BIẾN </strong>
                                    gian hàng thông minh phổ biến tại các quốc gia phát triển, nhưng ở các nước
                                    đang phát triển như Việt Nam, mô hình này còn khá mới mẻ và chủ yếu được thử nghiệm
                                    ở các trung tâm thương mại lớn.
                                </p>
                            </div>

                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>KHẢ NĂNG TIẾP CẬN KHÁCH HÀNG: </strong>
                                    Thanh toán không tiền mặt và smartphone giúp mô hình này tiếp cận giới trẻ,
                                    nhưng một số khu vực vẫn ưa chuộng mua sắm truyền thống do hạn chế về hạ tầng và lo ngại bảo mật.</p>
                            </div>

                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>Rào cản về chi phí và công nghệ: </strong>
                                    Triển khai gian hàng thông minh đòi hỏi vốn đầu tư lớn và đội ngũ kỹ thuật trình độ cao,
                                    gây khó khăn cho doanh nghiệp nhỏ.</p>
                            </div>

                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>Nhận thức và tâm lý khách hàng: </strong>
                                    Nhiều người chưa quen với công nghệ tự động và lo ngại về tính bảo mật,
                                    đặc biệt là nhóm khách hàng lớn tuổi.</p>
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
                                <div className='btn-sp'>
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
                                <div className='btn-sp'>
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
                                <div className='btn-sp'>
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
                                <div className='btn-sp'>
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

export default BoothSolution
