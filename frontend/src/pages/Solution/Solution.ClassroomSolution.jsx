import React from 'react'
import { assets } from '../../assets/assets';
import "./Solution.ClassroomSolution.css"
import Notification from "../../components/Notification/Notification";


const ClassRoomSolution = () => {
    return (
        <div>
            <Notification />
            <div className="class-section-0">
                <img src={assets.class1} alt="class1" />
            </div>
            <div className='class-section-1 class-section'>
                <img src={assets.class2} alt="class2" />
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
                    <a href="/lien-he"><span>LIÊN HỆ</span></a>
                </div>
            </div>
            <div className='class-section-2 class-section'>
                <div className="class-container">
                    <h1>GIẢI PHÁP PHÒNG HỌP THÔNG MINH DÀNH CHO AI</h1>
                    <p>SIEGenX tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông minh tại Việt Nam</p>
                    <div className='class-section-2-child'>
                        <div>
                            <img src={assets.class4} alt="class4" />
                            <h2>DÀNH CHO TRƯỜNG HỌC</h2>
                            <p>Màn hình tương tác thông minh là thiết bị all in one có thể thay thế hoàn toàn TV,
                                máy tính, máy chiếu thông thường, bảng đen truyền thống…Không phải kết nối cầu kỳ,
                                thiết bị được tích hợp với tính năng ưu việt cho phép người dùng thao tác trực tiếp trên màn hình.</p>
                        </div>

                        <div>
                            <img src={assets.class5} alt="class5" />
                            <h2>DÀNH CHO GIÁO VIÊN</h2>
                            <p>Đa dạng ứng dụng hữu ích, cho phép trình chiếu, duyệt web, xem video, tạo hình ảnh, tải tệp trình chiếu,
                                video call và thực hiện nhiều tác vụ khác, tối ưu hóa quá trình hội họp và giảng dạy. </p>
                        </div>


                        <div>
                            <img src={assets.class6} alt="class6" />
                            <h2>DÀNH CHO HỌC SINH</h2>
                            <p>Nội dung cuộc họp và bài giảng với hình ảnh sắc nét, âm thanh, truyền tải thông tin một cách chính xác.
                                Công nghệ chống chói, chống lóa sáng và lọc ánh sáng xanh. Sản phẩm được trang bị màn hình Chimei/ BOE
                                chống lóa mắt giúp bảo vệ mắt khỏi tác động có hại.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='class-section-3 class-section'>
                <div className="div class-container">
                    <h1>THỰC TRẠNG CHUNG</h1>
                    <div className='class-section-3-child'>
                        <img src={assets.class7} alt="class7" />
                        <div>
                            <h2>NHỮNG TIẾT HỌC NHÀM CHÁN, NHỮNG BÀI HỌC KHÔNG THẤY KẾT QUẢ</h2>
                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>Phương pháp giảng dạy truyền thống: </strong>
                                    một chiều, quá tập trung vào lý thuyết khiến học sinh dễ cảm thấy mệt mỏi và mất tập trung
                                </p>
                            </div>

                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>Cơ sở vật chất lạc hậu: </strong>
                                    thiếu các thiết bị hỗ trợ hiện đại cũng hạn chế khả năng tương tác và tạo ra những bài học sinh động</p>
                            </div>

                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>Thiếu sự tương tác: </strong>
                                    Các hoạt động nhóm, thảo luận, thực hành ít được khuyến khích,
                                    khiến học sinh trở nên thụ động và thiếu cơ hội phát triển kỹ năng mềm.</p>
                            </div>

                            <div className='sol-box'>
                                <i class="fa-solid fa-check"></i>
                                <p><strong>Môi trường học tập nhàm chán: </strong>
                                    Phòng học thiếu sáng tạo, trang thiết bị lạc hậu, không gian học tập hạn chế,
                                    khiến học sinh cảm thấy bức bách và không thoải mái.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='class-section-4 class-section'>
                {/* <a href="/"><span>LIÊN HỆ</span></a> */}
                <div className='class-container'>
                    <h1>THIẾT BỊ & SẢN PHẨM</h1>
                    <div class="sp-row">
                        <div class="sp-col">
                            <div className='sp'>
                                <img src={assets.productClass1} alt="productclass1" />
                                <a href="/" className='buy'><i class="fa-solid fa-cart-shopping"></i></a>
                                <h5>Màn Hình Tương Tác Thông Minh SIEGenX 75inch 4k SGX -1T75</h5>
                                <div>
                                    <a href="/lien-he">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/san-pham">
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
                                    <a href="/lien-he">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/san-pham">
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
                                    <a href="/lien-he">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/san-pham">
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
                                    <a href="/lien-he">
                                        <span>LIÊN HỆ</span></a>
                                    <a href="/san-pham">
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
        </div >
    )
}

export default ClassRoomSolution