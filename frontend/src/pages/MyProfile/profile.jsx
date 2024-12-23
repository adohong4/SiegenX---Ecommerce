import React, { useContext, useEffect, useState } from 'react';
import './profile.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import AddressPopup from '../../components/Popup/AddressPopup/AddressPopup';

const Profile = () => {
    const { url, token, user_address } = useContext(StoreContext)
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/user/getProfile`, {
                headers: { token }
            });
            if (response.data.status) {
                setName(response.data.metadata.username);
                setEmail(response.data.metadata.email);
                // console.log(response.data.data.name);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Lỗi hiển thị");
        }
    };

    //update profile
    const updateUserProfile = async () => {
        try {
            const response = await axios.put(`${url}/v1/api/user/updateProfile`, {
                username,
                password
            }, {
                headers: { token }
            });
            if (response.data.status) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Lỗi cập nhật thông tin tài khoản");
        }
    };

    useEffect(() => {
        if (token) {
            fetchUserData();
        }
    }, [token]);

    const [showAddressPopup, setShowAddressPopup] = useState(false);

    return (
        <div className="profile">
            <div className="container my-4 d-flex">
                <div className="profile-info">
                    <h2 className="border-bt">Thông tin cá nhân</h2>
                    <div className="form-group top-image-profile">
                        <p>Ảnh đại diện</p>
                        <img

                            alt="Profile"
                            className="profile-image"

                        />
                        <input
                            type="file"
                            id="image"
                            className="form-control-file"
                            style={{ display: 'none' }}
                        />
                    </div>

                    <div className="form-group top-mid-profile">
                        <p>Username</p>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Type here"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Type here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Type here"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="bottom-profile">
                        <button type="submit" className="btn btn-primary add-btn" onClick={updateUserProfile}>
                            LƯU THAY ĐỔI
                        </button>
                    </div>
                </div>

                {/* My Address */}
                <div className="my-address">
                    <h2 className="border-bt">Địa chỉ của tôi</h2>
                    <button
                        type="button"
                        className="btn btn-primary add-btn"
                        onClick={() => setShowAddressPopup(true)}
                    >
                        THÊM ĐỊA CHỈ
                    </button>
                    <div className="address-list">
                        {user_address.map((address, index) => {
                            return (
                                <div key={index} className="my-address-addresses">
                                    <img src={assets.parcel_icon} alt="" className="address-icon" />
                                    <div className="address-details">
                                        <div className='Address'>
                                            <p>
                                                <p><span>{address.fullname}</span></p>
                                            </p>
                                            <div className="address-details-body">
                                                <div className="address-details-left">
                                                    <p>{address.street}, {address.precinct}, {address.city}, {address.province}, {address.phone}</p>
                                                </div>
                                                <div className="address-details-right">
                                                    <button>Xóa</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* AddressPopup */}
            {showAddressPopup && (
                <AddressPopup setShowAddress={setShowAddressPopup} />
            )}
        </div>
    );
};

export default Profile;
