import React from 'react';
import Spcecial from '../Spceaial/Spcecial';

const Myself = ({ house }) => {
    return (
        <div>
            <h4>MySelf</h4>
            <p><small>House: {house}</small></p>
            <section>
                <Spcecial></Spcecial>
            </section>
        </div>
    );
};

export default Myself;