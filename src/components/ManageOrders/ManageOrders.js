import axios from 'axios';
import React from 'react';
import './ManageOrder.css'
import { useForm } from 'react-hook-form';

const ManageOrders = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Ordered Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="service-form mt-5 pt-5">
            <h2><span className="text-color">Order</span></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("image")} placeholder="image-url" />
                <input className="button" type="submit" />
            </form>
        </div>
    );
};

export default ManageOrders;