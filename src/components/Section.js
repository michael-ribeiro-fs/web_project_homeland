class Section {
  constructor(items, renderer, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _renderItem(item) {
    this._container.append(this._renderer(item));
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderItem(item);
    });
  }
}

export default Section;
