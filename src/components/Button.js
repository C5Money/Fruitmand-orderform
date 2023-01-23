import React from 'react';

function Button({ type, className, clickHandler, isDisabled, children}) {
    return (
        <button
            type={ type }
            className={ className }
            onClick={ clickHandler }
            disabled={isDisabled}
        >
            { children }
        </button>
    );
}

export default Button;