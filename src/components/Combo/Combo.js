import React from 'react';
import './Combo.css';

const Combo = () => {
    return (
        <div className="combo-bg">
            <h2>Our <span className="text-color">Combo Pack</span></h2>
            <div className="mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-7">
                        <img src="https://b.zmtcdn.com/data/pictures/3/18681723/4145234981a0512ba014d47fb53efba4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title fs-1"><span className="text-color">50% Discount</span></h5>
                            <p className="card-text fs-4">It's usually pretty easy to persuade a hungry customer to add side items for just a few dollars more. Without that perceived – and real – value offering, many customers might not even consider adding extra items.</p>
                            <p className="card-text fs-5"><small className="text-muted">Only 3 Days Left</small></p>
                            <button className="button px-2 rounded">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Combo;