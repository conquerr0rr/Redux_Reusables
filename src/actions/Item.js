import {
    GET_SINGLE_ITEM_SUCCESS,
    GET_SINGLE_ITEM_FAIL,
    GET_ALL_ITEMS_FAIL,
    GET_ALL_ITEMS_SUCCESS,
    GET_ITEMS_BY_CATEGORY_FAIL,
    GET_ITEMS_BY_CATEGORY_SUCCESS,
    DELETE_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL,
    UPDATE_ITEM_SUCCESS,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAIL,
    SHOW_LOADER,
    HIDE_LOADER
} from '../constants/constant';
import * as api from '../api/index';

export const ShowLoader = () => (dispatch) => {
    dispatch({
        type: SHOW_LOADER,
    })
}
export const HideLoader = () => (dispatch) => {
    dispatch({
        type: HIDE_LOADER,
    })
}

export const getByCategory = (category) => async (dispatch) => {
    try {
        dispatch(ShowLoader())
        let res = await api.getItemByCategory(category);
        if (res.status === 200) {
            dispatch({
                type: GET_ITEMS_BY_CATEGORY_SUCCESS,
                payload: res
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ITEMS_BY_CATEGORY_FAIL
        });
    }
};

export const getAll = () => async (dispatch) => {
    try {
        dispatch(ShowLoader())
        let res = await api.getAllItems();
        if (res.status === 200) {
            dispatch({
                type: GET_ALL_ITEMS_SUCCESS,
                payload: res
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ALL_ITEMS_FAIL
        });
    }
}

export const getOneItem = (id) => async (dispatch) => {
    try {
        dispatch(ShowLoader())
        let res = await api.getSingleItem(id);
        if (res.status === 200) {
            dispatch({
                type: GET_SINGLE_ITEM_SUCCESS,
                payload: res
            });
        }
    } catch (error) {
        dispatch({
            type: GET_SINGLE_ITEM_FAIL
        });
    }
}

export const AddSingle = (Form) => async (dispatch) => {
    try {
        let res = await api.AddItem(Form);
        console.log(res)
        dispatch({
            type: CREATE_ITEM_SUCCESS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_ITEM_FAIL
        });
    }
}


export const DeleteSingle = (id) => async (dispatch) => {
    try {
         api.DeleteItem(id);
        dispatch({
            type: DELETE_ITEM_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: DELETE_ITEM_FAIL
        });
    }
}
export const UpdateSingle = (Form) => async (dispatch) => {
    try {
        let res = await api.AddItem(Form);
        dispatch({
            type: UPDATE_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: UPDATE_ITEM_FAIL
        });
    }
}