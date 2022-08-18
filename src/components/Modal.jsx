import React from 'react'
import '../styles/modal.css'
import { useForm } from 'react-hook-form';

const defaultValue = {
    brand: '',
    model: '',
    color: '',
    year: '',
    price: '',
}

const Modal = ({ visibleModal, setVisibleModal, createNewCar }) => {

    const { register, handleSubmit, reset } = useForm();

    const submit = data => {
        createNewCar(data)
        reset(defaultValue)
        setVisibleModal('')

    }

    return (
        <div className={`modal ${visibleModal}`} id="modal1 ">
            <div className="modal-dialog">
                <header className="modal-header">
                    Create Car
                    <button onClick={() => setVisibleModal('')} className="close-modal" aria-label="close modal" data-close>✕</button>
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
                   Introduce car values
                </footer>
            </div>
        </div>
    )
}

export default Modal