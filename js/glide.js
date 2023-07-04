new Glide('.brand-content', {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    768: {
      perView: 2,
    },
    400: {
      perView: 1,
    },
  },
}).mount();
