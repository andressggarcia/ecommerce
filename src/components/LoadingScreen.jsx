import React from 'react';

const LoadingScreen = () => {
    return (
        <div className='spinner-overlay'>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;