import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
    <div className="flex space-x-2">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
    </div>
</div>
    );
};

export default Loading;