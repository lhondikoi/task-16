import React from 'react';
import '../styles/card.css'

export default function Card({ headline, intro, category, thumbnail }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={ thumbnail } alt={ headline }/>
            </div>
            <div className="card-body">
                <h3>{ headline }</h3>
                <p className="intro">{ truncate(intro, 150) }</p>
            </div>
        </div>
    )
}

function truncate(string, length) {
    return string.substring(0, length - 3) + "..."
}