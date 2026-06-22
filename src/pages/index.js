import Popup from "../components/Popup.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

const initialImages = [
  {
    name: "Imagem ilustrativa Cidade Costeira",
    link: "./images/city-coast.png",
    large: "./images/city-coast-large.png",
  },
  {
    name: "Imagem ilustrativa vista do horizonte na costa",
    link: "./images/coastal-town-view.png",
    large: "./images/coastal-town-view-large.png",
  },
  {
    name: "Imagem ilustrativa Vista de uma igreja ao pôr do sol",
    link: "./images/church-sunset-view.png",
    large: "./images/church-sunset-view-large.png",
  },
  {
    name: "Imagem ilustrativa Vista de uma cidade junto a um rio e uma ponte",
    link: "./images/city-river-bridge-view.png",
    large: "./images/city-river-bridge-view-large.png",
  },
  {
    name: "Imagem ilustrativa Vista de um campo gramado",
    link: "./images/grassy-field-landscape.png",
    large: "./images/grassy-field-landscape-large.png",
  },
  {
    name: "Imagem ilustrativa Vista de um jardim verde com uma placa",
    link: "./images/green-garden-sign.png",
    large: "./images/green-garden-sign-large.png",
  },
  {
    name: "Imagem ilustrativa Vista de um homem em frente a uma cabana indígena",
    link: "./images/man-indigenous-hut.png",
    large: "./images/man-indigenous-hut-large.png",
  },
  {
    name: "Imagem ilustrativa Vista de casas rurais",
    link: "./images/rural-houses-view.png",
    large: "./images/rural-houses-view-large.png",
  },
];

const popup = new Popup(".popup");

const cardRenderer = (item) => {
  const card = new Card(item, (imageSrc, imageAlt) => {
    popup.setPopupContent(imageSrc, imageAlt);
    popup.openPopup();
  });

  return card.generateCard();
};

const cardSection = new Section(initialImages, cardRenderer, ".photogrid");

cardSection.renderItems();

function addPopupListener(images) {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const largeImage = getLargeImage(image.src);

      popup.setPopupContent(largeImage, image.alt);
      popup.openPopup();
    });
  });
}

const placesImages = document.querySelectorAll(".places__card-image");

function getLargeImage(src) {
  return src.replace(".png", "-large.png");
}

addPopupListener(placesImages);
