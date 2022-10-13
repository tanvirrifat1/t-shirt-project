import React, { useContext } from 'react';
import { MObileContext } from '../Grandpa/Grandpa';

const Brother = ({ house }) => {
    const [mobile, setMobile] = useContext(MObileContext)
    return (
        <div>
            <h3>Brother</h3>
            <p><small>House: {house}</small></p>
            <p><small>Mobile : {mobile}</small></p>
        </div>
    );
};

export default Brother;