import React from 'react'
import "./modal.scss"


function Modal({ setModalOpen }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                
                <div className="title">
                    <h1>Ваш заказ оформлен!</h1>
                </div>
                <div className="body">
                    <p>Скоро с вами свяжуться наши сотрудники</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setModalOpen(false);
                        }}
                        id="okBtn"
                    >
                       Хорошо
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Modal