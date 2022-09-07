import React from 'react';
import './Notfound.css'
import { useNavigate } from 'react-router-dom';
const Notfound = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/home');
    }

    return (
        <div className="not">
                       <div>
                       <h1 >404 ! Error</h1> <br /> <br /> 

<button onClick={handleGoBack} style={{textAlign: 'center' , border:'none', backgroundColor:'none' ,marginLeft:'8rem'}}> Go Back</button>
                       </div>

        </div>
    );
};

export default Notfound;