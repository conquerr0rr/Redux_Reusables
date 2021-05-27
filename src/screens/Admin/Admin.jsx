import React, { useEffect, useState } from 'react'
import './Admin.scss'
import { useDispatch, useSelector } from 'react-redux'
// import { readData, createData, deleteData } from '../../actions/Data'

import { getAll, getByCategory, getOneItem, AddSingle, DeleteSingle } from '../../actions/Item';

import Loader from '../../components/Loader/Loader';

const Admin = ({ props }) => {
  const [Form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });




  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(getAll())
    e.preventDefault();
    // console.log(newForm);
    let newForm = new FormData();
    newForm.append('image', Form.image);
    newForm.append('title', Form.title);
    newForm.append('price', Form.price);
    newForm.append('description', Form.description);
    newForm.append('category', Form.category);
    dispatch(AddSingle(newForm));
  }

  const DeleteItem = (id) =>{
    dispatch(DeleteSingle(id))
    dispatch(getAll())
  }

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const Items = useSelector((state) => state.itemReducer);
  
  const DisplayItem = Items.Items.data;

  return (
    <div className="parentContainer">

      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th colSpan="2">Manage</th>
          </tr>
        </thead>
        <tbody>

          
          {DisplayItem && DisplayItem.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td className="desc">{item.description}</td>
              <td>{item.category}</td>
              <td><img src={`http://localhost:9000/uploads/${item.image}`} alt="" /></td>
              <td>
                <button className="update-button" >Update</button>
              </td>
              <td>
                <button className="delete-button" onClick={()=>{DeleteItem(item._id)}}>Delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <form id="form-container" onSubmit={handleSubmit} >
        <div className="container">
          <h1>Add New Data</h1>
          <p>Please fill in this form to create a data</p>
          <hr />

          <label><b>Title</b></label>
          <input type="text" onChange={(e) => setForm({
            ...Form,
            title: e.target.value
          })} placeholder="" name="title" required />

          <label><b>Price</b></label>
          <input type="text" placeholder="" name="price" required
            onChange={(e) => setForm({
              ...Form,
              price: e.target.value
            })} />


          <label><b>Category </b></label>
          <select name="category"
            onChange={(e) => setForm({
              ...Form,
              category: e.target.value
            })}
            id="">
            <option>Select a Category</option>
            <option>Living</option>
            <option>Bedroom</option>
            <option>Kitchen</option>


          </select>


          <br />
          <br />


          <input type="file" name="image" onChange={(e) => setForm({
            ...Form,
            image: e.target.files[0]
            // image: URL.createObjectURL(e.target.files[0])
          })} />
          <br />
          <br />


          <label><b>Description</b></label>

          <input type="text" placeholder="" name="category" required
            onChange={(e) => setForm({
              ...Form,
              description: e.target.value
            })} />


          <button type="submit" className="registerbtn" >Add Item</button>
        </div>

      </form>
    </div>

  )
}

export default Admin;
