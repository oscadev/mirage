import React, {useEffect,useState} from 'react'

export const Modal = (props) => {
    
    return (
        <div className={`modal flex shadow ${props.show?"show-modal":"hide-modal"}`}>
            <div className="modal-text">{props.text}</div>
            <div className="close-modal" onClick={()=>props.toggleModal(false,'')}>X</div>
        </div>
    )
}
