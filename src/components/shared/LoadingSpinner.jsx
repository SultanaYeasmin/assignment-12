import React from 'react';
import { BarLoader
} from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[500px]'>
            <BarLoader

                color="#6068e5"     width={200}

            />
        </div>
    );
};

export default LoadingSpinner;