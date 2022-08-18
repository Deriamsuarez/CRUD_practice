import React from 'react'
import axios from 'axios'


const Car = ({ car, getAllCars, setVisibleModalUpdate, setCarUpdate }) => {

  

  const deleteCarById = id => {
    const url = `https://cars-crud.herokuapp.com/cars/${id}`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        getAllCars()
      })
      .catch(err => console.log(err))
  }

  const getInfoUpdate = () => {
    setVisibleModalUpdate('is-visible')
    setCarUpdate(car)
  }

  return (
    <tr>
      <th>{car.id}</th>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.color}</td>
      <td>{car.year}</td>
      <td>{parseInt(car.price)}</td>
      <td className='tdButton'>
        <button onClick={getInfoUpdate} ><i className="fi fi-rs-pencil"></i></button>
        <button onClick={() => deleteCarById(car.id)}><i className="fi fi-rs-trash"></i></button>
      </td>
    </tr>
  )
}

export default Car