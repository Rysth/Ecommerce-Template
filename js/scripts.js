// Creates Dynamically the Brand System to show each Image
const brandSystem = document.querySelector('#brand-system');

class Image {
  constructor(className, src, alt) {
    this.className = className;
    this.src = src;
    this.alt = alt;
  }
}

const brandImage = [
  new Image('', './resources/images/SVG/brands/brand-1.svg', 'Lacoste Brand Logo'),
  new Image('', './resources/images/SVG/brands/brand-2.svg', 'Adidas Brand Logo'),
  new Image('', './resources/images/SVG/brands/brand-3.svg', 'Amazon Brand Logo'),
  new Image('', './resources/images/SVG/brands/brand-4.svg', 'Levis Brand Logo'),
  new Image('', './resources/images/SVG/brands/brand-5.svg', 'Shopify Brand Logo'),
];

function chargeBrandImage() {
  brandSystem.innerHTML = brandImage
    .map((element, index) => {
      return `
    <img
      id="brand-image-${index}"
       class="brand-image"
       src="${element.src}"
       alt="${element.alt}"
     />
    `;
    })
    .join('');

  new Glide('.brand-content', {
    type: 'carousel',
    perView: 3,
    focusAt: 0,
    breakpoints: {
      768: {
        perView: 2,
      },
      400: {
        perView: 1,
      },
    },
  }).mount();
}

window.onload = chargeBrandImage;
