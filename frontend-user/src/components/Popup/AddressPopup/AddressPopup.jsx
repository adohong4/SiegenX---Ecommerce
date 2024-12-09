<div className="address-popup">
    <form onSubmit={onAddress} className="address-popup-container">
        <div className="popup-header">
            <h2>Thêm Địa Chỉ</h2>
            <button type="button" className="close-btn" onClick={() => setShowAddress(false)}>×</button>
        </div>


        <div className="popup-body">

            <div className="form-group">
                <label htmlFor="fullname">Họ và tên</label>
                <input
                    required
                    name="fullname"
                    id="fullname"
                    type="text"
                    placeholder="Nhập họ và tên"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                    required
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    onChange={onChangeHandler}
                />
            </div>


            <div className="form-group">
                <label htmlFor="street">Đường/Thôn</label>
                <input
                    required
                    name="street"
                    id="street"
                    type="text"
                    placeholder="Nhập tên đường hoặc thôn"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="form-group multi-fields">
                <div>
                    <label htmlFor="precinct">Xã/Phường</label>
                    <input
                        required
                        name="precinct"
                        id="precinct"
                        type="text"
                        placeholder="Nhập xã hoặc phường"
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="city">Thành phố</label>
                    <input
                        required
                        name="city"
                        id="city"
                        type="text"
                        placeholder="Nhập thành phố"
                        onChange={onChangeHandler}
                    />
                </div>
            </div>

            <div className="form-group multi-fields">
                <div>
                    <label htmlFor="province">Tỉnh</label>
                    <input
                        required
                        name="province"
                        id="province"
                        type="text"
                        placeholder="Nhập tỉnh"
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="zipcode">Mã bưu chính</label>
                    <input
                        required
                        name="zipcode"
                        id="zipcode"
                        type="text"
                        placeholder="Nhập mã bưu chính"
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
        </div>


        <div className="popup-footer">
            <button type="submit" className="btn">Lưu Địa Chỉ</button>
        </div>
    </form>
</div>
