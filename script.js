gsap.to("#nav",{
    backgroundColor : "#000",
    height:"60px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start:"top -10%",
        end:"top -11%",
        scrub:0.8
    } 
})

gsap.to("#main",{
    backgroundColor:"#110F0F",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
}) 


gsap.from("#about-us img,#about-us-in",{
y:80,
opacity:0,
duration:1,
stagger:0.5,
scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end: "top 55%",
    scrub:3,
}})

gsap.from("#topimg",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#topimg",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
}})

gsap.from("#bottemimg",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#topimg",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
}})



