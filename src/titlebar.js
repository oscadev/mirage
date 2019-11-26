import React from 'react'

export const TitleBar = (props) => {
    return (
        <div id="author-bar" className="flex-row">
            <div id="author-img" style={{backgroundImage:`url(${props.image})`}}/>
            <div id="author-name">Written by: {props.name}</div>
            <div id="author-date">{props.date}</div>
        </div>
    )
}
