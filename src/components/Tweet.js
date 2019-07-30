import React from 'react';

export default function Tweet({key,name,message}) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{message}</h2>
        </div>
    );
}