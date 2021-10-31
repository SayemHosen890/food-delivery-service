import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://haunted-village-72031.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDeleteData = id => {
        const url = `https://albino-restaurant-website.web.app/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deleteCount) {
                    alert('Delete SuccessFully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div>
            <h2>this is manage</h2>
            <div>
                <div>
                    {
                        services.map(service => <div key={service._id}>
                            <h3>{service.name}</h3>
                            <button onClick={() => handleDeleteData(service._id)}>Delete</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;