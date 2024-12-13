import React from 'react'
import { assets } from '../../assets/assets';
import "./Solution.ClassroomSolution.css"



const ClassRoomSolution = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <div>
                        <hr />
                        <h1>GIẢI PHÁP PHÒNG HỌC THÔNG MINH LÀ GÌ</h1>
                    </div>
                    <p>Phòng học thông minh, hay lớp học thông minh, mang đến cho cả người học và người giảng dạy
                        cơ hội trải nghiệm môi trường giáo dục được trang bị đầy đủ các ứng dụng và thiết bị tiên tiến
                        của thời đại công nghệ phát triển. Mô hình này giúp giảm thiểu thời gian giảng dạy của giáo viên
                        mà vẫn đảm bảo truyền tải lượng kiến thức phong phú và hiệu quả cho học sinh.</p>

                    <p>Các thiết bị trong phòng học thông minh đều dựa trên nền tảng công nghệ hiện đại, dễ sử dụng,
                        thân thiện với người dùng, và hoạt động một cách đồng bộ nhằm làm cho nội dung học trở nên sinh động hơn.
                        Nhờ vậy, cả giáo viên lẫn học sinh được trải nghiệm một không gian học tập đầy thú vị và hiệu quả,
                        góp phần tăng sự hứng thú học tập và cải thiện đáng kể kết quả học tập của học sinh.</p>
                </div>
            </div>

            <img src={assets.class1} alt="class1" />

            <div className='container section1'>
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
                    <a href="/"><span>LIÊN HỆ</span></a>
                </div>
            </div>

            <div className='section2'>
                <div className="container">
                    <h1>GIẢI PHÁP PHÒNG HỌP THÔNG MINH DÀNH CHO AI</h1>
                    <p>SIEGenX tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông minh tại Việt Nam</p>
                    <div className='section2-child'>
                        <div>
                            <img src={assets.class4} alt="class4" />
                            <h4>DÀNH CHO TRƯỜNG HỌC</h4>
                            <p>Màn hình tương tác thông minh là thiết bị all in one có thể thay thế hoàn toàn TV,
                                máy tính, máy chiếu thông thường, bảng đen truyền thống…Không phải kết nối cầu kỳ,
                                thiết bị được tích hợp với tính năng ưu việt cho phép người dùng thao tác trực tiếp trên màn hình.</p>
                        </div>

                        <div>
                            <img src={assets.class5} alt="class5" />
                            <h4>DÀNH CHO GIÁO VIÊN</h4>
                            <p>Đa dạng ứng dụng hữu ích, cho phép trình chiếu, duyệt web, xem video, tạo hình ảnh, tải tệp trình chiếu,
                                video call và thực hiện nhiều tác vụ khác, tối ưu hóa quá trình hội họp và giảng dạy. </p>
                        </div>


                        <div>
                            <img src={assets.class6} alt="class6" />
                            <h4>DÀNH CHO HỌC SINH</h4>
                            <p>Nội dung cuộc họp và bài giảng với hình ảnh sắc nét, âm thanh, truyền tải thông tin một cách chính xác.
                                Công nghệ chống chói, chống lóa sáng và lọc ánh sáng xanh. Sản phẩm được trang bị màn hình Chimei/ BOE
                                chống lóa mắt giúp bảo vệ mắt khỏi tác động có hại.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-3 container'>
                <h1>THỰC TRẠNG CHUNG</h1>
                <div className='section-3-child'>
                    <img src={assets.class7} alt="class7" />
                    <div>
                        <h4>NHỮNG TIẾT HỌC NHÀM CHÁN, NHỮNG BÀI HỌC KHÔNG THẤY KẾT QUẢ</h4>
                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Phương pháp giảng dạy truyền thống: </strong>
                                một chiều, quá tập trung vào lý thuyết khiến học sinh dễ cảm thấy mệt mỏi và mất tập trung
                            </p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Cơ sở vật chất lạc hậu: </strong>
                                thiếu các thiết bị hỗ trợ hiện đại cũng hạn chế khả năng tương tác và tạo ra những bài học sinh động</p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Thiếu sự tương tác: </strong>
                                Các hoạt động nhóm, thảo luận, thực hành ít được khuyến khích,
                                khiến học sinh trở nên thụ động và thiếu cơ hội phát triển kỹ năng mềm.</p>
                        </div>

                        <div className='box'>
                            <i class="fa-solid fa-check"></i>
                            <p><strong>Môi trường học tập nhàm chán: </strong>
                                Phòng học thiếu sáng tạo, trang thiết bị lạc hậu, không gian học tập hạn chế,
                                khiến học sinh cảm thấy bức bách và không thoải mái.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className='section-4'>
                    <h2>GIẢI PHÁP CÓ GÌ</h2>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="..." alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div> */}


            <div className='section-6 container'>
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
                <img src={assets.class9} alt="class9" />
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

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </div >
    )
}

export default ClassRoomSolution