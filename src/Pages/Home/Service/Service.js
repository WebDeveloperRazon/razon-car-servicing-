import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id , name , img , description ,price } =service ;
    const navigate = useNavigate();
    const handleServiceDetail =() => {
        navigate(`/service/${id}`)
    }

    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price : {price} BDT</p>
            <p><small>{description}</small></p>
           <button onClick={()=>handleServiceDetail(id)} className=" btn-primary">{name}</button>
        </div>
    );
};

export default Service;