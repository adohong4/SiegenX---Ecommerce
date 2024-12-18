import React, { useContext, useEffect, useState } from 'react';
import './profile.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import AddressPopup from '../../components/Popup/AddressPopup/AddressPopup';
import { AdminContext } from '../../context/AdminContext';

const Profile = () => {
    const { url, token, user_address } = useContext(StoreContext)


    const [profileImage, setProfileImage] = useState(assets.upload);
    const [showAddressPopup, setShowAddressPopup] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="profile">
            <div className="container my-4 d-flex">
                <div className="profile-info">
                    <h2 className="border-bt">Thông tin cá nhân</h2>
                    <div className="form-group top-image-profile">
                        <p>Ảnh đại diện</p>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="profile-image"
                            onClick={() => document.getElementById('image').click()}
                        />
                        <input
                            type="file"
                            id="image"
                            className="form-control-file"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="form-group top-mid-profile">
                        <p>Username</p>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Type here"
                        />
                    </div>

                    <div className="form-group">
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Type here"
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
                        />
                    </div>
                    <div className="bottom-profile">
                        <button type="submit" className="btn btn-primary add-btn">
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
                                        <p>
                                            <p><span>{address.fullname}</span></p>
                                        </p>
                                        <div className="address-details-body">
                                            <div className="address-details-left">
                                                <p>{address.street}, {address.precinct}, {address.city}, {address.province}, {address.phone}</p>
                                            </div>
                                            <div className="address-details-right">
                                                <button>Chỉnh sửa</button>
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
