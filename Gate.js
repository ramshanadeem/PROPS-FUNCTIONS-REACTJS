import React from 'react';
function Gate({ isOpen }) {
    return (
        <div >
            {isOpen == 'true' ? "Open" : "Closed"}
            {isOpen ? "open" : "closed"}
        </div >
    );
}

export default Gate;