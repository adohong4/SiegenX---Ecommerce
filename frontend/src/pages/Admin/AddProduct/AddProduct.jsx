import React, { useState, useContext } from 'react';
import './AddProduct.css';
import { assets } from '../../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';
import { Tab, Tabs } from 'react-bootstrap';

const AddProduct = () => {
    const { url } = useContext(StoreContext);
    const [images, setImage] = useState([]);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Màn hình LED",
        mainBoard: "",
        chip: "",
        cpu: "",
        gpu: "",
        ram: "",
        memory: "",
        version: "",
        ports: "",
        displaySize: "",
        pixelDensity: "",
        display: "",
        refreshRate: "",
        specifications: {} // Đảm bảo specifications là một đối tượng
    });
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        // Kiểm tra nếu tên input thuộc về specifications
        if (name in data.specifications) {
            setData(prevData => ({
                ...prevData,
                specifications: {
                    ...prevData.specifications,
                    [name]: value
                }
            }));
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        formData.append("mainBoard", data.mainBoard);
        formData.append("chip", data.chip);
        formData.append("cpu", data.cpu);
        formData.append("gpu", data.gpu);
        formData.append("ram", data.ram);
        formData.append("memory", data.memory);
        formData.append("version", data.version);
        formData.append("ports", data.ports);
        formData.append("displaySize", data.displaySize);
        formData.append("pixelDensity", data.pixelDensity);
        formData.append("display", data.display);
        formData.append("refreshRate", data.refreshRate);

        try {
            const response = await axios.post(`${url}/api/product/add`, formData);
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Màn hình LED",
                    mainBoard: "",
                    chip: "",
                    cpu: "",
                    gpu: "",
                    ram: "",
                    memory: "",
                    version: "",
                    ports: "",
                    displaySize: "",
                    pixelDensity: "",
                    display: "",
                    refreshRate: "",
                    specifications: {}
                });
                setImage(false);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Đã có lỗi xảy ra!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add d-flex align-items-center justify-content-center add-tab" style={{ minHeight: '100vh' }}>
            <div className=" addprd card p-5 shadow-lg border-0" style={{width: '100%', borderRadius: '15px', height: '100%' }}>
                <h2 className="text-center mb-4">Thêm Mới Sản Phẩm</h2>

                <form onSubmit={onSubmitHandler}>
                    <Tabs defaultActiveKey="general" id="product-tabs">
                        <Tab eventKey="general" title="Thông Tin Sản Phẩm">
                        <div className="form-group text-center">
                            <p className="font-weight-bold mb-1">Tải Ảnh</p>
                            <label htmlFor="images" style={{ cursor: 'pointer' }}>
                                <div className="upload-preview-container">
                                    {images.length > 0 ? (
                                        images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={URL.createObjectURL(img)}
                                                alt={`Upload Preview ${index + 1}`}
                                                className="rounded-circle shadow-sm"
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    objectFit: 'cover',
                                                    border: '3px dashed #ddd',
                                                    padding: '5px',
                                                    margin: '5px',
                                                }}
                                            />
                                        ))
                                    ) : (
                                        <img
                                            src={assets.upload}
                                            alt="Upload Preview"
                                            className="rounded-circle shadow-sm"
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                objectFit: 'cover',
                                                border: '3px dashed #ddd',
                                                padding: '10px',
                                            }}
                                        />
                                    )}
                                </div>
                            </label>
                            <input
                                onChange={(e) => setImage([...e.target.files])}
                                type="file"
                                id="images"
                                className="d-none"
                                multiple
                                required
                            />
                            
                        </div>
                        
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

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="category" className="mb-2">Danh mục</label>
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
                                        required
                                    />
                                </div>
                            </div>
                        </Tab>


                        {/* Tab 2 */}
                        <Tab eventKey="specifications" title="Thông Số Kỹ Thuật">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="mainboard" className="mb-2">Mainboard</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.mainboard }
                                    type="text"
                                    name="mainboard"
                                    id="mainboard"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập Mainboard"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="cpu" className="mb-2">Chip</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.cpu || ''}
                                    type="text"
                                    name="chip"
                                    id="chip"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập loại chip"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="gpu" className="mb-2">GPU</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.gpu || ''}
                                    type="text"
                                    name="gpu"
                                    id="gpu"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập GPU"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="gpu" className="mb-2">CPU</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.cpu || ''}
                                    type="text"
                                    name="cpu"
                                    id="cpu"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập CPU"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="ram" className="mb-2">RAM</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.ram || ''}
                                    type="text"
                                    name="ram"
                                    id="ram"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập RAM"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="storage" className="mb-2">Memory</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.memory || ''}
                                    type="text"
                                    name="storage"
                                    id="storage"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập Dung lượng bộ nhớ (HDD/SSD)"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="os" className="mb-2">Version</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.os || ''}
                                    type="text"
                                    name="os"
                                    id="os"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập Hệ điều hành"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="display" className="mb-2">DisplaySize</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.displaySize || ''}
                                    type="text"
                                    name="display"
                                    id="display"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập Thông số màn hình (IPS, OLED, v.v.)"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="ports" className="mb-2">pixelDensity</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.pixelDensity || ''}
                                    type="text"
                                    name="pixelDensity"
                                    id="pixelDensity"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập Port"
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="ports" className="mb-2">Port</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.ports || ''}
                                    type="text"
                                    name="ports"
                                    id="ports"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập pixelDensity"
                                    required
                                />
                            </div>            
                            {/* Weight */}
                            <div className="form-group col-md-6">
                                <label htmlFor="weight" className="mb-2">Display</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.display || ''}
                                    type="text"
                                    name="display"
                                    id="display"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập màn hình"
                                    required
                                />
                            </div>

                            {/* Battery */}
                            <div className="form-group col-md-6">
                                <label htmlFor="battery" className="mb-2">refreshRate</label>
                                <input
                                    onChange={onChangeHandler}
                                    // value={data.specifications?.refreshRate || ''}
                                    type="text"
                                    name="refreshRate"
                                    id="refreshRate"
                                    className="form-control rounded-pill"
                                    placeholder="Nhập tần số quét"
                                    required
                                />
                            </div>
                        </div>
                        </Tab>
                    </Tabs>

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary rounded-pill px-4 py-2" disabled={loading}>
                            {loading ? "Đang tải..." : "Thêm Sản Phẩm"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;