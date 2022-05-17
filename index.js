// function myFunction(){
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// }
// myFunction();

 // gsap + locomotive ek sath chalane ke liye 
  
gsap.registerPlugin(ScrollTrigger);
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
// gsap + locomotive content end


var image = document.querySelector('#second .img img');
var value;
gsap.to(".img img", {
  scrollTrigger: {
    trigger: "#second",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "bottom 80%",
    // end: "+=100%"
    onUpdate: () => {
      var imgPos = document.querySelector('#second .img img').getBoundingClientRect().top;
      // console.log(imgPos);
      value = imgPos*0.5;
      image.style.transform = `translate(-50%, -50%) rotate3d(1,1,0,${value}deg)`;
    }
  },
  top: "-30%",
});
// ___________________moving text_____________________
gsap.to("#text2 .txt h1",{
  x: "-100%",
  repeat:-1, 
  ease: Linear.easeInOut,
  duration: 5,
});


//____________________________img________________

var elem = document.querySelectorAll(".two");
elem.forEach( function(elm) {
  
  elm.addEventListener("mousemove",function(dets){
    // console.log(dets.clientX);
    this.children[1].style.opacity = 1;
    this.children[1].style.transform =`translateX( ${dets.clientX}px) rotate(${dets.clientX/20}deg)`;
    
  });
  elm.addEventListener("mouseout",function(dets){
    this.children[1].style.opacity = 0;

  });
});
// *******************texttile.js**************

var texta = document.querySelectorAll('.texta');
texta.forEach(function(elem){
  
  gsap.to(elem,{
    // ease: Expo.easeInOut,
      scrollTrigger: {
      trigger: elem,
      scroller: '#main',
      start: 'top 100%',
      // markers: true,
      duration:1,
    },
    opacity:1,
    onStart:function() {
      $(elem).textillate({ in: { effect: 'fadeInUp' } });
    }
  });

});

document.querySelector("#menu").addEventListener("click",function(){
  document.querySelector("#menubar").style.left = "0%"
  // document.querySelector("a").style.display ="none"
}); 

document.querySelector("#closebutton").addEventListener("click",function(){
  document.querySelector("#menubar").style.left = "-100%"
});
