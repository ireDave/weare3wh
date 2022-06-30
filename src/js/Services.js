import { gsap } from "gsap";
import gsapCore from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function cards() {
  const CARD_WIDTH = 208;
  const CARD_HEIGHT = 265;
  const card = document.querySelector(".card");
  gsap.utils.toArray(".card").forEach((card) => {
    const { width, height } = card.getBoundingClientRect();
    const cardBack = card.querySelector(".back");
    const cardFront = card.querySelector(".front");

    gsap.set(cardFront, {
      opacity: 0,
      rotationY: -180,
      x: width / 2 - (height * (CARD_WIDTH / CARD_HEIGHT)) / 2,
    });

    const duration = 0.4;
    const ease = "power2.out";
    const tl = gsap
      .timeline({ paused: true })
      .addLabel("start")
      .to(cardBack, { z: 70, duration, ease }, "start")
      .to(cardFront, { z: 70, duration, ease }, "start")
      .to(cardBack, { rotationY: 180, duration, ease }, "start")
      .to(cardFront, { rotationY: 0, duration, ease }, "start")
      .to(cardFront, { opacity: 1, duration: 0 }, "start+=0.09")
      .to(cardBack, { opacity: 0, duration: 0 }, "start+=0.09");

    card.addEventListener("mouseenter", (e) => {
      tl.play();
    });

    card.addEventListener("mouseleave", (e) => {
      tl.reverse();
    });


  });
    gsap.from(".card", { opacity: 0, duration: 0.5, y:100, ease: "power4.out", stagger: 0.2 });
}

export default function services() {
  const services_header = document.querySelector(".services__header");
  const services_subheader = document.querySelector(".services__subheader");

  let tl = gsap.timeline({ paused: true });
  tl.from(services_header, {
    duration: 0.5,
    y: 75,
    opacity: 0,
    ease: "power4.out",
  }).from(services_subheader, {
    duration: 0.5,
    y: 75,
    opacity: 0,
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: services_header,
    start: "-400 center",
    onEnter: () => {
      tl.play();
      cards();
    },
  });

  
}
