

import gsap from "gsap";



export default function bFormAnimation() {
  let tl = gsap.timeline();
  tl.to(".bcontact", {
    duration: 0.3,
    opacity: 0,
    scaleY: 0,
    ease: "power4.inOut",
  })
.to(".contact_form_success", {
      duration: 0.3,
      scale: 1,
      y: 100,
      ease: "power4.inOut",
    });
}
