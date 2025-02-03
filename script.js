var overlay= document.querySelector('#overlay');

let timeline = gsap.timeline();


timeline.to('#overlay', {
    width: 3000,
    height: 3000,
    duration:2,
    ease:'expo.inOut'
})
.to('#overlay h1 span', {
    top:'35%',
    duration:1,
    ease:'expo.inOut'
})

.to('#overlay h1 span', {
    top:'-100%',
    duration:2,
    delay:.5,
    ease:'expo.inOut'
})

.to('#overlay', {
    
    duration:2,
    opacity:0,
    
    onComplete: function(){
        overlay.style.display = 'none';
       },
    ease:'expo.inOut'
});

timeline.from('#nav h3', {
    opacity:0,
    duration:1,
    x:40,
    ease:'expo.inOut'
})

.from('#nav #icons i', {
    opacity:0,
    stagger:0.2,
    duration:0.4,
    x:20,
    ease:'expo.inOut'
})

.from('#maindets .line', {
    opacity:0,
    duration:1,
    width:0,
    stagger:.2,
    delay:-2,
    ease:'expo.inOut'
})

.from('#maindets .dets', {
    opacity:0,
    duration:1.8,
    y:20,
    stagger:.3,
    delay:-1.6,
    ease:'expo.inOut'
})

.from('#scroll', {
    scale:1,
    opacity:0,
    duration:0.1,
    delay:-0,
    ease:'expo.inOut',

})


.from('#right #links a', {
    opacity:0,
    duration:1,
    x:30,
    stagger:.2,
    
    ease:'expo.inOut'
})

gsap.from('#centre img', {
    opacity:0,
    duration:2,
    delay:10,
    opacity:0,
    ease:'expo.inOut'
    
})


