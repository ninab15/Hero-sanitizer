gsap.registerPlugin(ScrollTrigger);



gsap.from(".heading", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    stagger: 0.5,
});



gsap.from(".left-1", {
    x: -300,
    duration: 4,
    //    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: ".left-1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});

gsap.from(".left-2", {
    x: -500,
    duration: 4,
    //    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: ".left-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});

gsap.from(".right-1", {
    x: 400,
    duration: 4,
    //    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: ".left-1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});

gsap.from(".right-2", {
    x: 400,
    duration: 4,
    //    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: ".right-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});







///* Find alle h1'ere */
//const lefts = document.querySelectorAll(".left");
//
///* Loop igennem h1'ere */
//lefts.forEach((left) => {
//    /* Sæt .animate__animated på alle h1'ere */
//    gsap.from(left, {
//        X: -300,
//        ease: "none",
//        duration: 4,
//
//        scrollTrigger: {
//            trigger: ".left",
//            start: "top 20%",
//            end: "bottom center",
//            scrub: true,
//            markers: true,
//        }
//    });
//});






//gsap.from(".left", {
//    xPercent: -50,
//
//
//    ScrollTrigger: {
//        trigger: ".left",
//        markers: true,
//        start: "top center",
//        end: "bottom top",
//        scrub: true,
//    }
//});


///* Find alle h1'ere */
//const lefts = document.querySelectorAll(".left");
//
///* Loop igennem h1'ere */
//lefts.forEach((left) => {
//    /* Sæt .animate__animated på alle h1'ere */
//    gsap.set(left, {
//        css: {
//            className: "animate__animated"
//        }
//    });
//
//    /* Tildel class ved hjælp af ScrollTrigger */
//    ScrollTrigger.create({
//        trigger: left,
//        start: "top 20%",
//        end: "bottom center",
//        toggleClass: "animate__fadeInLeft",
//        scrub: true,
//        markers: true,
//    });
//});
