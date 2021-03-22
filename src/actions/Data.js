import { READ_DATA, CREATE_DATA, DELETE_DATA } from  '../constants/constant'
import * as api from '../api/index'


// ACTION CREATORS

// THESE ARE THE ACTUAL FUNCTIONS WHICH GETS DISPATCHED FROM HERE AND EXECUTED IN THE COMPONENT
export const readData = () => async (dispatch) => {
    // THE DISPATCH AS A PARAMETER IS POSSIBLE THROUGH THE REACT THUNK MODULE WHICH ALLOWS ASYNCHRONOUS TRANSFER OF DATA IN REDUX
    try {
        const { data } = await api.readData();
        // AS SOON AS WE DISPATCH THE DATA FROM HERE, IT SETS THE TYPE OF CATEGORY IN WHICH THE DATA IS MANIPULATED
        dispatch({ type: READ_DATA, payload: data });
        // console.log(data[0].firstname);
    } catch (error) {
        console.log(error.message);
    }
}

export const createData = (Form) => async (dispatch) => {
    try {
        const { data } = await api.createData(Form);
        dispatch({ type: CREATE_DATA, payload: data });
        console.log(Form)
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteData = (id) => async (dispatch) => {
    try {
        await api.deleteData(id);
        dispatch({ type: DELETE_DATA, payload: id });
        console.log(id)
    } catch (error) {
        console.log(error.message);
    }
}