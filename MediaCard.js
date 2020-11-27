import React from 'react';
function MediaCard({ title, body, image }) {
    return (
        <div style={{ width: '200px', margin: '5px auto', border: '2px solid', }}>
            <h2>{title}</h2>
            <p>{body}</p>
            <img width='100px' src={image} />

        </div >
    );
}

export default MediaCard;