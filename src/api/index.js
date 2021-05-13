// USED FOR ALL THE API PURPOSES AND ALLOWS THE DATA TO BE PASSED THROUGH THE URL
import axios from 'axios';
const url = 'http://localhost:9000/';

export const readData = () => axios.get(url + 'getAllData');
export const createData = (Form) => axios.put(url + 'create', Form);
export const deleteData = (id) => axios.delete(`${url}delete/${id}`);
export const updateData = (id) => axios.patch(url + `update/:id`);

// FOR AUTHENTICATION AND AUTHORISATION
export const register = (FormData) => axios.post(url + 'users/register', FormData);
export const login = (loginDetails) => axios.post(url + 'users/login', loginDetails);


// FOR DIFFERENT ITEMS IN SHOP

export const getAllItems = () => axios.get(url + 'items/getAllItems');
export const getItemByCategory = (category) => axios.get(url + 'items/getItemByCategory', category);
export const getSingleItem = (id) => axios.get(url + 'items/getSingleItem', id);
export const AddItem = (Form) => axios.post(url + 'items/', Form);
export const DeleteItem = (id) => axios.delete(url + 'items/', id);
export const UpdateItem = (Form) => axios.patch(url + 'items/', Form);