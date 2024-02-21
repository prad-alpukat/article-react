import React from 'react';
import MyComponent from './MyComponent';
import { MyProvider } from './MyContext';

const InputA = () => {
    return (
        <MyProvider>
            <MyComponent />
        </MyProvider>
    );
};

export default InputA;
