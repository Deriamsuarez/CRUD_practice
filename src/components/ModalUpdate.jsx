import React, { useEffect } from 'react'
import '../styles/modal.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const defaultValue = {
    brand: '',
    model: '',
    color: '',
    year: '',
    price: '',
}

const ModalUpdate = ({ visibleModalUpdate, setVisibleModalUpdate, carUpdate, getAllCars, setCarUpdate }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (carUpdate) {
            reset(carUpdate)
        }
    }, [carUpdate])



    const submit = data => {
        const url = `https://cars-crud.herokuapp.com/cars/${data.id}/`
        axios.patch(url, data)
        .then(res => {
            console.log(res.data)
            getAllCars()
            
        })
        .catch(err => console.log(err))
        reset(defaultValue)
        setCarUpdate(null)
        setVisibleModalUpdate('')
        
        

    }

    return (
        <div className={`modal ${visibleModalUpdate}`} id="modal2 ">
            <div className="modal-dialog">
                <header className="modal-header">
                    Edit Car
                    <button onClick={() => setVisibleModalUpdate('')} className="close-modal" aria-label="close modal" data-close>✕</button>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='inputModal'>
                        <label htmlFor='brand'>Brand:</label>
                        <input type='text' id='brand' {...register("brand")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='model'>Model:</label>
                        <input type='text' id='model' {...register("model")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='color'>Color:</label>
                        <input type='text' id='color' {...register("color")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='year'>Year:</label>
                        <input type='number' id='year' {...register("year")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='price'>Price:</label>
                        <input type='text' id='price' {...register("price")} />
                    </div>

                    <button>Submit</button>
                </form>
                <footer className="modal-footer">
                    Edit the cars values
                </footer>
            </div>
        </div>
    )
}

export default ModalUpdate