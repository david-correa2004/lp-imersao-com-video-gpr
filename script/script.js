const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cont_after.style.width = "90%";
      // console.log('Elemento está visível:', entry.target);
    } else {
      cont_after.style.width = "0%";
      // console.log('Elemento não está visível:', entry.target);
    }
  });
};

// Criação do IntersectionObserver
const myObserver = new IntersectionObserver(callback, {
  root: null, // O viewport do navegador
  rootMargin: '0px',
  threshold: 0.1 // A porcentagem de visibilidade
});

const cont_after = document.querySelector('#cont-after');
const lote = document.querySelector('#lote');
myObserver.observe(lote);



window.onload = () => {

  var swiper1 = new Swiper(".mySwiper-differ", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-differ",
      nextEl: ".swiper-button-next-differ",
    },
    breakpoints: {
      800: {
        slidesPerView: 4,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-videos", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-videos",
      nextEl: ".swiper-button-next-videos",
    },
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 25,
      }
    }
  });

}
/* 
  Importe este link no head no HTML:
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

  Importe este link no footer:
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


*/