import React from 'react'

export default function dashboard() {
    var no = 5;
    var roundName="General"
    return (
        <div>
            <p>{`${no} rounds remaining of ${roundName}`}</p>
        </div>
    )
}
