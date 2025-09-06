import React from 'react';

function Modal({ modal, setModal, children }) {
    return <div className={modal ? "modal" + ' ' + "modal__active" : "modal"}>
        <div className="modal__block">
            <h3 className="modal__title">Add task</h3>
            <div className="modal__group">
                {children}
            </div>
            <button type="button" className="modal__close" onClick={() => setModal(false)}>X</button>
        </div>
    </div>
}

export default Modal