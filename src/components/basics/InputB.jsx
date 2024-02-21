import React, { useContext } from 'react';
import MyContext from './MyContext';

const InputB = () => {
    // Using useContext to access the context values
    const contextValue = useContext(MyContext);

    return (
        <div>
            <p>{contextValue.data}</p>
        </div>
    );
};

export default InputB;