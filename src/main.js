import "./index.css";
// swiper core styles
import "swiper/css";

// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";


import { Autoplay, Navigation, Pagination } from "swiper";
import Swiper from "swiper";

import hero from "./js/Hero.js";
import services from "./js/Services.js";
import "./js/contactForm";

window.addEventListener("DOMContentLoaded", (event) => {
  Alpine.plugin(focus);

  window.Alpine = Alpine;

  Alpine.start();
  hero();
  services();

  Swiper.use([Autoplay, Navigation, Pagination]);
  const swiper = new Swiper(".mySwiperClass", {
    spaceBetween: 40,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });







});
