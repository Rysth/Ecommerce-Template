// Creates Dynamically the Brand System to show each Image
const brandSystem = document.querySelector('#brand-system');

class Image {
  constructor(id, className, src, alt) {
    this.id = id;
    this.className = className;
    this.src = src;
    this.alt = alt;
  }
}

const brandImages = [
  new Image(
    0,
    '',
    './resources/images/SVG/brands/brand-1.svg',
    'Lacoste Brand Logo'
  ),
  new Image(1, '', './resources/images/SVG/brands/brand-2.svg', 'Adidas Brand Logo'),
  new Image(2, '', './resources/images/SVG/brands/brand-3.svg', 'Amazon Brand Logo'),
  new Image(3, '', './resources/images/SVG/brands/brand-4.svg', 'Levis Brand Logo'),
  new Image(
    4,
    '',
    './resources/images/SVG/brands/brand-5.svg',
    'Shopify Brand Logo'
  ),
];

function loadBrandImages() {
  brandSystem.innerHTML = brandImages
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

loadBrandImages();

// Creates Dynamically the Category System to show each Image
const categorySystem = document.querySelector('#category-system');

class Category {
  constructor(id, className, url, image, subtitle, description) {
    this.id = id;
    this.className = className;
    this.url = url;
    this.image = image;
    this.subtitle = subtitle;
    this.description = description;
  }
}

const categoryImages = [
  new Image(
    0,
    '',
    './resources/images/PNG/category/category-1.png',
    'Category Number 1'
  ),
  new Image(
    1,
    '',
    './resources/images/PNG/category/category-2.png',
    'Category Number 2'
  ),
  new Image(
    2,
    '',
    './resources/images/PNG/category/category-3.png',
    'Category Number 3'
  ),
];
const categoryItems = [
  new Category(
    0,
    '',
    '#',
    categoryImages[0],
    'Hoodies & Sweetshirt',
    'Explore Now!'
  ),
  new Category(1, '', '#', categoryImages[1], 'Coats & Parkas', 'Explore Now!'),
  new Category(2, '', '#', categoryImages[2], 'Tees & T-Shirt', 'Explore Now!'),
];

function loadCategoryItems() {
  categorySystem.innerHTML = categoryItems
    .map((element, index) => {
      return `
     <div class="category-card">
        <a class="category-link" href="${element.className}">
          <picture class="category-picture">
            <img
              class="category-image"
              src="${element.image.src}"
              alt="Category Image 1"
            />
          </picture>
          <div class="category-content">
            <div class="category-name">
              <h3 class="category-subtitle">${element.subtitle}</h3>
              <p class="category-description">${element.description}</p>
            </div>
            <i class="category-arrow fas fa-arrow-right"></i>
          </div>
        </a>
      </div>
    `;
    })
    .join('');
}

loadCategoryItems();
