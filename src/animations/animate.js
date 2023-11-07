'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//* highlights slider counter
const nextHighlightSlider = () => {
    gsap.fromTo('.slider-counter', { x: '-100%' }, { x: '100%', duration: 1 });
    gsap.fromTo('.highlight-image', { scale: 0 }, { scale: 1 });
    gsap.fromTo('.highlight-name', { scale: 0 }, { scale: 1 });
};
const prevHighlightSlider = () => {
    gsap.fromTo('.slider-counter', { x: '100%' }, { x: '-100%', duration: 1 });
    gsap.fromTo('.highlight-image', { scale: 0 }, { scale: 1 });
    gsap.fromTo('.highlight-name', { scale: 0 }, { scale: 1 });
};
const categoryChangerSlider = () => {
    gsap.fromTo('.highlights-category', { scale: 0 }, { scale: 1 });
    gsap.fromTo('.highlight-image', { scale: 0 }, { scale: 1 });
    gsap.fromTo('.highlight-name', { scale: 0 }, { scale: 1 });
}


//* global animation
const fadeInTransition = (className, delay = 1) => gsap.fromTo(className, { opacity: 0 }, { opacity: 1, delay: delay });
const fadeOutTransition = (className) => gsap.fromTo(className, { opacity: 1 }, { opacity: 0 });



export {
    nextHighlightSlider,
    prevHighlightSlider,
    categoryChangerSlider,

    // global animation
    fadeInTransition,
    fadeOutTransition
};