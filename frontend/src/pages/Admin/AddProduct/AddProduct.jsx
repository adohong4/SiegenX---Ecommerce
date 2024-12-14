import React, { useState, useContext } from 'react'
import './AddProduct.css'
import { assets } from '../../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';


const AddProduct = () => {
    const { url } = useContext(StoreContext)

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Màn hình LED"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/product/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Màn hình LED"
            })
            setImage(false)
            toast.success(response.data.messge)
        }
        else {
            toast.error(response.data.messge)
        }
    }


    return (
        <div className="add d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className='img-bgr1'>
                <img src={assets.anh1} alt="" />
            </div>
            <div className='img-bgr2'>
                <img src={assets.anh3} alt="" />
            </div>
            <div className="card p-5 shadow-lg border-0" style={{ maxWidth: '700px', width: '100%', borderRadius: '15px' }}>

                <h2 className="text-center mb-4">Thêm Mới Sản Phẩm</h2>

                <form onSubmit={onSubmitHandler}>
                    {/* Upload Image Section */}
                    <div className="form-group text-center">
                        <p className="font-weight-bold mb-1">Tải Ảnh</p>
                        <label htmlFor="image" style={{ cursor: 'pointer' }}>
                            <img
                                src={image ? URL.createObjectURL(image) : assets.upload_area}
                                alt="Upload Preview"
                                className="rounded-circle shadow-sm"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'cover',
                                    border: '3px dashed #ddd',
                                    padding: '10px'
                                }}
                            />
                        </label>
                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            id="image"
                            className="d-none"
                            required
                        />
                    </div>

                    {/* Product Name */}
                    <div className="form-group">
                        <label htmlFor="name" className="mb-2">Tên Sản Phẩm</label>
                        <input
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            name="name"
                            id="name"
                            className="form-control rounded-pill"
                            placeholder="Nhập tên sản phẩm"
                            required
                        />
                    </div>

                    {/* Product Description */}
                    <div className="form-group">
                        <label htmlFor="description" className="mb-2">Miêu tả sản phẩm</label>
                        <textarea
                            onChange={onChangeHandler}
                            value={data.description}
                            name="description"
                            id="description"
                            rows="4"
                            className="form-control"
                            placeholder="Miêu tả sản phẩm"
                            style={{ borderRadius: '15px' }}
                        ></textarea>
                    </div>

                    {/* Product Details */}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="category" className="mb-2">Category</label>
                            <select
                                onChange={onChangeHandler}
                                value={data.category}
                                name="category"
                                id="category"
                                className="form-control rounded-pill"
                            >
                                <option value="Màn hình LED">Màn hình LED</option>
                                <option value="MH tương tác">MH tương tác</option>
                                <option value="MH quảng cáo LCD">MH quảng cáo LCD</option>
                                <option value="Quảng cáo 3D (OOH)">Quảng cáo 3D (OOH)</option>
                                <option value="KTV 5D">KTV 5D</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="price" className="mb-2">Giá (đ)</label>
                            <input
                                onChange={onChangeHandler}
                                value={data.price}
                                type="number"
                                name="price"
                                id="price"
                                className="form-control rounded-pill"
                                placeholder="20"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary rounded-pill px-4 py-2">
                            Thêm Sản Phẩm
                        </button>
                    </div>
                </form>

            </div>

        </div>

    )
}

export default AddProduct
