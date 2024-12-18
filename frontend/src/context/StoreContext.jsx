
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const url = "http://localhost:4001";
    const url2 = "http://localhost:5174";
    const [token, setToken] = useState("")
    const [product_list, setProductList] = useState([])
    const [user_address, setUserAddress] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "v1/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "v1/api/cart/remove", { itemId }, { headers: { token } })
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
    }

    const loadUserAddress = async (token) => {
        const response = await axios.get(`${url}/v1/api/user/getAddress`, {
            headers: { token }
        });
        setUserAddress(response.data.metadata.addresses);
    }

    // const loadCartData = async (token) => {
    //     const response = await axios.post(url + "v1/api/cart/get", {}, { headers: { token } })
    //     setCartItems(response.data.cartData);
    // }

    useEffect(() => {
        async function loadData() {
            await fetchProductList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                // await loadCartData(localStorage.getItem("token"))
                await loadUserAddress(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])


    const contextValue = {
        user_address,
        product_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url, url2,
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
