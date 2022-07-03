import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function results() {
  gsap.to(".results_section", {
    backgroundPosition: "50% 50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".results_section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".results_section",
    {
      backgroundPosition: () =>
        i ? `50% ${-window.innerHeight * getRatio(".results_section")}px` : "50% 0px",
    },
    {
      backgroundPosition: () =>
        `50% ${window.innerHeight * (1 - getRatio(".results_section"))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".results_section",
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // to make it responsive
      },
    }
  );
}
