import React from "react";

function ImagePopup(props) {
  const className = props.dataCard
    ? `popup popup_type_${props.name} popup_opened`
    : `popup popup_type_${props.name}`;

  return (
    <div className={className} id="max-img">
      <div className="popup__body">
        <div className="popup__content-max-img popup-content">
          <img
            className="popup__max-img"
            src={props.dataCard && props.dataCard.link}
            alt={props.dataCard && props.dataCard.name}
          />
          <h2 className="popup__max-img-title">
            {props.dataCard && props.dataCard.name}
          </h2>
          <button
            type="button"
            className="popup__close-button"
            onClick={props.onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
