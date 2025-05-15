import React from 'react';
import {
    PuffLoader
} from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[500px]'>
            <PuffLoader

                color="#136717"
                size={100}

            />
        </div>
    );
};

export default LoadingSpinner;