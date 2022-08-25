gsap.set('.sky-container', 
    {position:'relative', 
    background:'#fff', 
    width:'100%', 
    maxWidth:'100%', 
    height:'100%', 
    top:0, 
    left:'50%', 
    x:'-50%'
    }
)
gsap.set('.scrollDist', {width:'100%', height:'200%'})

if(window.innerWidth > 800) {
    gsap.timeline({
        scrollTrigger: {
            trigger:'.sky-container', 
            start:'top top', 
            end:'bottom bottom', 
            scrub:1}
        })

        .fromTo('.sky', {y:0},{y:-200}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.cloud4', {y:-80},{y:-900}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0)
        .fromTo('.elemento1', {y:-50, scale: 2},{y:-600, scale: 1}, 0)
        .fromTo('.flag', {scale: 1},{scale: 1.2}, 0)

} else {
    gsap.timeline({
        scrollTrigger: {
            trigger:'.sky-container', 
            start:'top top', 
            end:'bottom bottom', 
            scrub:1
        }
    })

        .fromTo('.sky', {y:0},{y:-100}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.cloud4', {y:-80},{y:-900}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0)
        .fromTo('.elemento1', {y:-50, scale: 2},{y:-600, scale: 1}, 0)
        .fromTo('.flag', {scale: 1},{scale: 1.2}, 0)
}


$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) 
// scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)

