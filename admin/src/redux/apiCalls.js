import { publicRequest, userRequest } from "../requestMethods"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess } from "./productsRedux"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, userInfo) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", userInfo)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(res.data))
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}