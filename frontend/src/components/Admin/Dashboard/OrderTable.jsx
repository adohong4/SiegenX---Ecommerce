import React, { useEffect, useContext, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { StoreContext } from '../../../context/StoreContext';

const OrderTable = () => {
    const { url, order_list, fetchOrder } = useContext(StoreContext);
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalOrder, setTotalOrder] = useState(0);
    const [totalPages, setTotalPages] = useState(0); // Theo dõi tổng số trang

    const fetchListpage = async (page = 1) => {
        try {
            const response = await axios.get(`${url}/v1/api/profile/order/pagination?page=${page}&limit=5`);
            if (response.data.message) {
                setList(response.data.data);
                setTotalOrder(response.data.pagination.limit);
                setTotalPages(response.data.pagination.totalPages);
            }
        } catch (error) {
            toast.error('Error fetching data');
        }
    };

    useEffect(() => {
        fetchListpage(currentPage);
    }, [currentPage]);

    return (
        <div className='trade-list-container'>
            <div className='trade-list-title'>
                <p>Giao dịch gần đây</p>
            </div>

            <table className="trade-list-table">
                <tbody>
                    {list.map((item) => (
                        <tr key={item._id} className='table-row'>
                            <td>{item._id}</td>
                            <td>{item.date}</td>
                            <td>{item.paymentMethod}</td>
                            <td>+ {(item.amount).toLocaleString()} đ</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
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
        </div>
    )
}

export default OrderTable
