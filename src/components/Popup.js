class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._image = this._popup.querySelector(".popup_image");
    this._caption = this._popup.querySelector(".popup_caption");

    this._popup.addEventListener("click", (evt) => {
      if (evt.target === this._popup) {
        this.closePopup();
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        !this._popup.classList.contains("popup-is-hidden")
      ) {
        this.closePopup();
      }
    });
  }

  setPopupContent(imageSrc, imageAlt) {
    this._image.src = imageSrc;
    this._caption.textContent = imageAlt;
  }

  openPopup() {
    this._popup.classList.remove("popup-is-hidden");
  }

  closePopup() {
    this._popup.classList.add("popup-is-hidden");
    this._image.src = "";
    this._caption.textContent = "";
  }
}

export default Popup;
