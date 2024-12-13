import React from 'react'
import { assets } from '../../assets/assets';
import "./Solution.BoothSolution.css"

const BoothSolution = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <div>
                        <hr />
                        <h1>GIAN HÀNG THÔNG MINH</h1>
                    </div>
                    <p>
                        Gian hàng thông minh là một khái niệm sử dụng công nghệ để tối ưu hóa trải nghiệm mua sắm tại các
                        cửa hàng hoặc các sự kiện thương mại. Gian hàng thông minh kết hợp nhiều công nghệ tiên tiến như trí tuệ nhân tạo (AI),
                        Internet vạn vật (IoT), nhận diện khuôn mặt, dữ liệu lớn (Big Data), và tự động hóa để mang đến sự tiện lợi,
                        nhanh chóng và cá nhân hóa trong quá trình mua sắm.</p>
                </div>
            </div>

            <img src={assets.booth1} alt="booth1" />

            <div className='container section1'>
                <img src={assets.booth2} alt="booth2" />
                <div>
                    <h1>GIẢI PHÁP NÀY GIÚP GÌ CHO BẠN</h1>
                    <p>
                        Gian hàng thông minh giúp khách hàng tiết kiệm thời gian đáng kể nhờ vào hệ thống thanh toán tự động.
                        Khách hàng không cần xếp hàng chờ đợi tại quầy thu ngân mà có thể thanh toán qua ứng dụng, mã QR hoặc
                        hệ thống nhận diện khuôn mặt. Ngoài ra, màn hình tương tác và ứng dụng hỗ trợ tìm kiếm sản phẩm nhanh chóng,
                        giúp khách hàng không phải mất thời gian tìm kiếm trong gian hàng.
                    </p>
                    <p>
                        Khách hàng tận hưởng sự tiện lợi khi không cần mang theo tiền mặt, vì gian hàng thông minh hỗ trợ thanh toán không tiếp xúc qua ví điện tử,
                        thẻ tín dụng hoặc nhận diện khuôn mặt. Hệ thống này cũng đặc biệt phù hợp với những người muốn mua sắm mà không cần tương tác trực tiếp với
                        nhân viên, tạo cảm giác thoải mái và riêng tư.
                    </p>
                    <a href="/"><span>LIÊN HỆ</span></a>
                </div>
            </div>

            <div className='section2'>
                <div className="container">
                    <h1>GIẢI PHÁP GIAN HÀNG THÔNG MINH DÀNH CHO AI</h1>
                    <p>SIEGenX tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông minh tại Việt Nam</p>
                    <div className='section2-child'>
                        <div>
                            <img src={assets.booth3} alt="class4" />
                            <h4>KHÁCH HÀNG CÁ NHÂN</h4>
                            <p>Gian hàng thông minh phục vụ mọi khách hàng muốn có trải nghiệm mua sắm nhanh chóng, tiện lợi và hiện đại.
                                Điều này đặc biệt hấp dẫn với những người bận rộn, cần tiết kiệm thời gian, hoặc những người yêu thích công nghệ.
                                Ngoài ra, người tiêu dùng trẻ, thường xuyên sử dụng thanh toán không tiền mặt và các ứng dụng mua sắm, cũng rất
                                phù hợp với mô hình này.</p>
                        </div>

                        <div>
                            <img src={assets.booth4} alt="class5" />
                            <h4>DOANH NGHIỆP BÁN LẺ</h4>
                            <p>Các doanh nghiệp bán lẻ như siêu thị, cửa hàng tiện lợi, chuỗi bán lẻ, hoặc nhà bán hàng tại các trung tâm thương mại
                                có thể triển khai gian hàng thông minh để nâng cao hiệu quả hoạt động. Hệ thống giúp họ giảm chi phí nhân sự, quản lý
                                hàng hóa tốt hơn, và tối ưu hóa doanh thu thông qua các phân tích dữ liệu khách hàng. </p>
                        </div>


                        <div>
                            <img src={assets.booth5} alt="class6" />
                            <h4>CHÍNH PHỦ VÀ CỘNG ĐỒNG</h4>
                            <p>Các tổ chức công cộng cũng có thể triển khai mô hình gian hàng thông minh tại các địa điểm như nhà ga,
                                sân bay, hoặc trung tâm dịch vụ công cộng. Mục tiêu là phục vụ người dân tốt hơn, giảm thời gian chờ đợi
                                và tăng sự hài lòng thông qua việc tự động hóa các dịch vụ.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-3 container'>
                <h1>THỰC TRẠNG CHUNG</h1>
                <div className='section-3-child'>
                    <img src={assets.booth6} alt="booth6" />
                    <div>
                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>MỨC ĐỘ PHỔ BIẾN </strong>
                                gian hàng thông minh phổ biến tại các quốc gia phát triển, nhưng ở các nước
                                đang phát triển như Việt Nam, mô hình này còn khá mới mẻ và chủ yếu được thử nghiệm
                                ở các trung tâm thương mại lớn.
                            </p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>KHẢ NĂNG TIẾP CẬN KHÁCH HÀNG: </strong>
                                Thanh toán không tiền mặt và smartphone giúp mô hình này tiếp cận giới trẻ,
                                nhưng một số khu vực vẫn ưa chuộng mua sắm truyền thống do hạn chế về hạ tầng và lo ngại bảo mật.</p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Rào cản về chi phí và công nghệ: </strong>
                                Triển khai gian hàng thông minh đòi hỏi vốn đầu tư lớn và đội ngũ kỹ thuật trình độ cao,
                                gây khó khăn cho doanh nghiệp nhỏ.</p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Nhận thức và tâm lý khách hàng: </strong>
                                Nhiều người chưa quen với công nghệ tự động và lo ngại về tính bảo mật,
                                đặc biệt là nhóm khách hàng lớn tuổi.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='section-4'>
                <h2>GIẢI PHÁP CÓ GÌ</h2>
            </div>

            <img src={assets.meeting8} alt="meeting8" className='section-5' />

            <div className='section-6 container'>
                <a href="/"><span>LIÊN HỆ</span></a>
                <h1>THIẾT BỊ & SẢN PHẨM</h1>
                <img src={assets.meeting8} alt="meeting9" />
            </div> */}


            <div className='section-6 '>
                {/* <a href="/"><span>LIÊN HỆ</span></a> */}
                <h1>THIẾT BỊ & SẢN PHẨM</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
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
                        <div class="col-sm">
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
                        <div class="col-sm">
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
                        <div class="col-sm">
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

            <div className='section-7'>
                <img src={assets.booth7} alt="booth7" />
                <div>
                    <h2>LIÊN HỆ ĐĂNG KÝ</h2>
                    <form action="">
                        <div>
                            <input type="text" placeholder='Họ tên' name='name' />
                            <input type="text" placeholder='Số điện thoại' name='sdt' />
                        </div>
                        <input type="text" placeholder='Nội dung' name='des' />
                        <input type="submit" value="Gửi đi" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BoothSolution
