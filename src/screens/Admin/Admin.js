import React, { useEffect, useState } from 'react'
import './Admin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { readData, createData,deleteData } from '../../actions/Data'

const Admin = () => {
  const [Form, setForm] = useState({
    firstname: '',
    lastname: '',
    data: '',
    number: ''
  });
  const dispatch = useDispatch();
  const deleteElement = (id) =>{
    console.log(id)
    dispatch(deleteData(id))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createData(Form))
  }

  useEffect(() => {
    dispatch(readData())
  }, [dispatch]);
  const data = useSelector((state) => state.Data);

  return (
    <div className="parent-container">
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number</th>
            <th colSpan="2">Manage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data._id}>
              <td>{data._id}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.number}</td>
              <td>
                <button className="update-button" >Update</button>
              </td>
              <td>
                <button className="delete-button" onClick={deleteElement}>Delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <form id="form-container" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Add New Data</h1>
          <p>Please fill in this form to create a data</p>
          <hr />

          <label><b>First Name</b></label>
          <input type="text" onChange={(e) => setForm({
            ...Form,
            firstname: e.target.value
          })} placeholder="" name="firstname" required />

          <label><b>Last Name</b></label>
          <input type="text" placeholder="" name="lastname" required
            onChange={(e) => setForm({
              ...Form,
              lastname: e.target.value
            })} />
          <label><b>Number</b></label>
          <input type="number" placeholder="" name="number" required
            onChange={(e) => setForm({
              ...Form,
              number: e.target.value
            })} />
          <label><b>Data</b></label>
          <input type="text" placeholder="" name="data" required
            onChange={(e) => setForm({
              ...Form,
              data: e.target.value
            })} />


          <button type="submit" className="registerbtn" >Register</button>
        </div>

      </form>
    </div>

  )
}

export default Admin;
