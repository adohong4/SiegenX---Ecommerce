import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
    const [product_list, setProductList] = useState([]);
    const [user_list, setUserList] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const url = "http://localhost:4001";

    const fetchProductList = async () => {
        const response = await axios.get(`${url}/v1/api/products`);
        setProductList(response.data.data);
    };

    const removeProduct = async (productId) => {
        try {
            // Xóa sản phẩm khỏi danh sách sản phẩm
            const response = await axios.delete(`${url}/v1/api/products/${productId}`);

            if (response.data.success) {
                // Cập nhật lại danh sách sản phẩm
                setProductList((prevList) => prevList.filter((product) => product._id !== productId));
                console.log("Đã xóa sản phẩm thành công!");
            } else {
                console.error("Xóa sản phẩm thất bại:", response.data.message);
            }
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
        }
    };

    const fetchUserList = async (page = 1, limit = 20) => {
        const response = await axios.get(`${url}/v1/api/admin/getAllUser?page=${page}&limit=${limit}`);
        if (response.data.status) {
            setUserList(response.data.data);
            setTotalUsers(response.data.totalUsers);
            setTotalPages(response.data.totalPages);
        } else {
            toast.error("Error fetching user list");
        }
    };

    const removeUser = async (userId) => {
        try {
            const response = await axios.post(`${url}/v1/api/admin/deleteUser/${userId}`);
            if (response.data.success) {
                toast.success(response.data.message);
                await fetchUserList(); // Fetch the updated list after deletion
            } else {
                toast.error("Error deleting user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user");
        }
    };

    const contextValue = {
        product_list,
        fetchProductList,
        removeProduct,
        user_list,
        totalUsers,
        totalPages,
        fetchUserList,
        removeUser,
    };

    return (
        <AdminContext.Provider value={contextValue}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
