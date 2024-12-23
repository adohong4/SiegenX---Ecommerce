
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const url = "http://localhost:4001";
    const [token, setToken] = useState("")
    const [product_list, setProductList] = useState([])
    const [user_address, setUserAddress] = useState([])
    const [order_list, setOrderList] = useState([])
    const [contact_list, setContactList] = useState([])
    const [product_slug, setProductSlug] = useState(null);


    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/v1/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/v1/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const addQuantityToCart = async (itemId, quantity) => {
        if (quantity <= 0) {
            console.error("Số lượng phải lớn hơn 0");
        }

        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: quantity }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }))
        }
        if (token) {
            await axios.post(url + "/v1/api/cart/addQuantity", { itemId, quantity }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = product_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchProductList = async () => {
        const response = await axios.get(`${url}/v1/api/product/get`);
        setProductList(response.data.metadata);
    };

    const fetchContact = async () => {
        const response = await axios.get(`${url}/v1/api/contact/get`);
        setContactList(response.data.metadata.contacts);
    }

    const fetchOrder = async () => {
        const response = await axios.get(`${url}/v1/api/order/get`);
        setOrderList(response.data.metadata);
    }

    const fetchProductSlug = async (slug) => {
        const response = await axios.get(`${url}/v1/api/product/getSlug/${slug}`);
        setProductSlug(response.data.metadata);
    };

    const loadUserAddress = async (token) => {
        const response = await axios.get(`${url}/v1/api/user/getAddress`, {
            headers: { token }
        });
        setUserAddress(response.data.metadata.addresses);
    }

    const loadCartData = async (token) => {
        const response = await axios.get(url + "/v1/api/cart/get", {
            headers: { token }
        });
        setCartItems(response.data.metadata);
    }

    useEffect(() => {
        async function loadData() {
            await fetchOrder();
            await fetchContact();
            await fetchProductList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
                await loadUserAddress(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])


    const contextValue = {
        order_list,
        contact_list,
        user_address,
        product_list,
        product_slug,
        cartItems,
        setCartItems,
        addToCart,
        addQuantityToCart,
        removeFromCart,
        getTotalCartAmount,
        fetchProductSlug,
        url,
        setToken,
        token
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
