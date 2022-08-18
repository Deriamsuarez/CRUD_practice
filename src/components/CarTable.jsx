import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Car from './Car'
import Modal from './Modal'
import ModalUpdate from './ModalUpdate'

const CarTable = () => {

    // useEffect(() => { 
    //     axios.delete(`https://cars-crud.herokuapp.com/cars/${car.id}`)
    //     .then(() => console.log("Borrado"))
    //     .catch(err => console.log(err))
    // }, [car.id])

    const [cars, setCars] = useState()
    const [visibleModal, setVisibleModal] = useState('')
    const [visibleModalUpdate, setVisibleModalUpdate] = useState('')
    const [carUpdate, setCarUpdate] = useState()

    const getAllCars = () => {
        const url = 'https://cars-crud.herokuapp.com/cars/'
        axios.get(url)
            .then(res => setCars(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllCars();
    }, [])

    const createNewCar = data => {
        const url = 'https://cars-crud.herokuapp.com/cars/'
        setVisibleModal('is-visible')
        axios.post(url, data)
            .then(res => getAllCars())
            .catch(err => console.log(err))
    }

    const updateCar = data => {
        const url = 'https://cars-crud.herokuapp.com/cars/'
        setVisibleModal('is-visible')
        axios.post(url, data)
            .then(res => getAllCars())
            .catch(err => console.log(err))
    }

    return (
        <section className='carTableContainer'>
            <Modal visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            createNewCar={createNewCar} />
            <ModalUpdate 
            visibleModalUpdate={visibleModalUpdate} 
            setVisibleModalUpdate={setVisibleModalUpdate}
            carUpdate={carUpdate} 
            setCarUpdate={setCarUpdate}
            getAllCars={getAllCars}/>
            <button onClick={createNewCar}>Agregar Vehiculo</button>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Color</th>
                        <th>Año</th>
                        <th>Precio</th>
                        <th className='edit'>Editar</th>
                    </tr>
                    {cars && cars.map(car =>
                        <Car
                            key={car.id}
                            car={car}
                            getAllCars={getAllCars}
                            visibleModalUpdate={visibleModalUpdate}
                            setVisibleModalUpdate={setVisibleModalUpdate}
                            setCarUpdate={setCarUpdate}
                        />)}
                </tbody>
            </table>
        </section>
    )
}

export default CarTable