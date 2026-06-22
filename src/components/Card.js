class Card {
  constructor(data, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._large = data.large;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const template = document.querySelector("#photogrid_template");

    return template.content.cloneNode(true);
  }

  _setEventListeners() {
    this._element
      .querySelector(".photogrid__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._large, this._name);
      });
  }

  generateCard() {
    const cardElement = this._getTemplate();

    const cardImage = cardElement.querySelector(".photogrid__image");

    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._element = cardElement;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
