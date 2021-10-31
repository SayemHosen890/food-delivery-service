import axios from 'axios';
import React from 'react';
import './ManageOrder.css'
import { useForm } from 'react-hook-form';

const ManageOrders = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://haunted-village-72031.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Ordered Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="service-form mt-5 pt-5">
            <h2><span className="text-color">Order Here</span></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="email" />
                <input type="number" {...register("price")} placeholder="number" />
                <input className="button" type="submit" />
            </form>
        </div>
    );
};

export default ManageOrders;