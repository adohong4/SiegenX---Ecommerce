import React, { useEffect, useContext, useState } from 'react';
import './ListProduct.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { StoreContext } from '../../../context/StoreContext';
import ProductPopup from '../../../components/Popup/ProductsPopup/ProductsPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ListProduct = () => {
    const { url, product_list } = useContext(StoreContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // Theo dõi tổng số trang
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sort, setSort] = useState('Sort By');

    const handleRowClick = (product) => {
        setSelectedProduct(product); // Truyền toàn bộ sản phẩm vào state
        setIsPopupVisible(true);
    };
    
    
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1);
    };

    // Hàm xóa sản phẩm
    const removeProduct = async (productId) => {

    };
    // const handleRowClick = (id) => {
    //     navigate(`/product/${id}`);
    // };
    const handleSearch = async () => {
        if (searchTerm.trim() === '') {
            await fetchList();
            return;
        }

        // const response = await axios.get(`${url}/api/user/getUserName/search?term=${searchTerm}`);
        const response = await axios.get(`${url}/api/food/searchFood`, { params: { term: searchTerm } })
        if (response.data.success) {
            setList(response.data.data);
        } else {
            toast.error("Error");
        }
    };

    const handleUpdateProduct = async (updatedProduct) => {
        try {
            const response = await axios.put(`${url}/v1/api/product/update/${updatedProduct._id}`, updatedProduct);
    
            if (response.data.success) {
                setList((prevList) =>
                    prevList.map((product) =>
                        product._id === updatedProduct._id ? updatedProduct : product
                    )
                );
                fetchList();
                toast.success(response.data.message);   
            } else {
                toast.error(error);
            }
        } catch (error) {
            toast.error(error);
        }
    };
    

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };
    const sortedList = [...list]
        .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
        .sort((a, b) => {
            if (sort === 'Asc') {
                return a.price - b.price;
            } else if (sort === 'Desc') {
                return b.price - a.price;
            }
            return 0;
        });

        const fetchList = async (page = 1) => {
                const response = await axios.get(`${url}/v1/api/product/pagination?page=${page}&limit=10`);
                if (response.data.message) {
                    setList(response.data.data);
                    setTotalPages(response.data.pagination.totalPages); 
                } else {
                    toast.error('Lỗi khi lấy danh sách sản phẩm');
                }
        };

        useEffect(() => {
            fetchList(currentPage); 
        }, [currentPage]);
        

    return (
        <div className='listproduct add flex-col'>
            <div className='top-list-tiltle'>
                <div className='col-lg-6 tittle-right'>
                    <p>SẢN PHẨM</p>
                </div>
                <div className='col-lg-6 list-left'>
                    <div className='search-right'>
                        <div className="sort-container">
                            <select id="sort" onChange={handleSortChange} value={sort}>
                                <option value="Sort By">Sort By</option>
                                <option value="Asc">Asc</option>
                                <option value="Desc">Desc</option>
                            </select>
                        </div>

                        <div className="selected-container">
                            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="All" selected>Tất cả</option>
                                <option value="Màn hình LED">Màn hình LED</option>
                                <option value="MH tương tác">MH tương tác</option>
                                <option value="MH quảng cáo LCD">MH quảng cáo LCD</option>
                                <option value="Quảng cáo 3D (OOH)">Quảng cáo 3D (OOH)</option>
                                <option value="KTV 5D">KTV 5D</option>
                            </select>
                        </div>
                    </div>

                    <div className='search-left'>
                        <div className='search'>
                            <div className='search-CSKH'>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search..."
                                    className='search-input'
                                />
                                <button onClick={handleSearch} className='btn-search'>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="list-table">
                <div className="list-table-format title">
                    <b>Hình ảnh</b>
                    <b>Mã sản phẩm</b>
                    <b>Tên Sản Phẩm</b>
                    <b>Danh Mục</b>
                    <b>Giá</b>
                    <b>Số Lượng</b>
                    <b>Tùy Chỉnh</b>
                </div>
                {product_list.map((item, index) => (
                    <div
                        key={index}
                        className="list-table-format"
                        onClick={() => handleRowClick(item)} // Thay vì item._id
                        style={{ cursor: 'pointer' }} // Hiển thị con trỏ tay
                    >
                        <img src={`${url}/images/${item.images[0]}`} alt="" />
                        <p className="id-product">{item._id}</p>
                        <p className="name-product">{item.title}</p>
                        <p className="category-product">{item.category}</p>
                        <p className="price-product">{item.price.toLocaleString()}</p>
                        <p>{item.quantity}</p>
                        <div className="button-product">
                            <button className="cursor1">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />


            {isPopupVisible && (
                <ProductPopup
                    product={selectedProduct}
                    onClose={() => setIsPopupVisible(false)}
                    url={url}
                    onUpdate={handleUpdateProduct}
                />
            )}
        </div>
    )
}

export default ListProduct
