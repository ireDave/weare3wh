import { gsap } from "gsap";
export default function hero(){

    function show_body(){
        let tl = gsap.timeline();
        tl.to("body", {duration: 2, opacity: 1,  ease: "power4.out"});
        return tl;
    }
    
    function show_header(){
        let tl = gsap.timeline();
        tl.from("header", {y:-200, duration: 0.3, opacity: 0, ease: "power4.out"});
        return tl
    }
    
    function hero_animation(){
        let tl = gsap.timeline();
        tl.to(".clip-hero", { clipPath:'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 2, ease: "power4.out"});
        return tl
    }

    let tl = gsap.timeline();
    tl.add(show_body)
    .add(show_header)
   .add(hero_animation, "+=0.5");

}