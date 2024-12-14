import React, { useEffect, useContext, useState } from 'react';
import './ListProduct.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';


const ListProduct = () => {
    const { url, product_list } = useContext(StoreContext)

    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sort, setSort] = useState('Sort By');

    // Hàm xóa sản phẩm
    const removeProduct = async (productId) => {

    };

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


    return (
        <div className='list add flex-col'>
            <div className='top-list-tiltle'>
                <div className='col-lg-6 tittle-right'>
                    <p>SẢN PHẨM</p>
                </div>
                <div className='col-lg-6 list-left'>
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
                            <option value="LED">Màn hình LED</option>
                            <option value="Tương tác">MH tương tác</option>
                            <option value="LCD">MH quảng cáo LCD</option>
                            <option value="OOH">Quảng cáo 3D (OOH)</option>
                            <option value="KTV 5D">KTV 5D</option>
                        </select>
                    </div>
                    <div className='search-left'>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search by Food name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button onClick={handleSearch}><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="list-table">
                <div className="list-table-format title">
                    <b>Hình Ảnh</b>
                    <b>Tên Sản Phẩm</b>
                    <b>Danh Mục</b>
                    <b>Giá</b>
                    <b>Số Lượng</b>
                    <b>Tùy Chỉnh</b>
                </div>
                {product_list.map((item, index) => (
                    // if (category === "All" || category === item.category) {}
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/${item.image}`} alt="" />
                        <p>{item.nameProduct}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <div>
                            <button onClick={() => (e)} className='cursor1' > Xóa</button>
                            <button onClick={() => (e)} className="btn-update1">Sửa</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListProduct
