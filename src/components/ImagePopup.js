import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_type_max-img" id="max-img">
        <div className="popup__body">
          <div className="popup__content-max-img popup-content">
            <img className="popup__max-img" src="#" alt="#" />
            <h2 className="popup__max-img-title">Архыз</h2>
            <button
              type="button"
              className="popup__close-button"
            ></button>
          </div>
        </div>
      </div>
    );
};

export default ImagePopup;