// First, wrap each character in a <span>

// heading function
function heading(){


const heading = document.querySelector("#heading");
const chars = heading.textContent.split("");

heading.innerHTML = chars.map(char => {
  const safeChar = char === " " ? "&nbsp;" : char;
  return `<span class="char">${safeChar}</span>`;
}).join("");

// Now animate with GSAP
gsap.set(".char", { opacity: 0, y: 20 });

gsap.to(".char", {
  opacity: 1,
  y: 0,
  stagger: 0.08,
  duration: 4,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#heading",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

}

 
heading();

// cursor magnet
var magnets = document.querySelectorAll('.gsap-magnetic')
var strength = 50

    magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    magnet.addEventListener('mouseout', function(event) {
        TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
    } );
    });

    function moveMagnet(event) {
    var magnetButton = event.currentTarget
    var bounding = magnetButton.getBoundingClientRect()

    //console.log(magnetButton, bounding)

    TweenMax.to( magnetButton, 1, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
    })
}
// GSAP Register
window.gsap.registerPlugin(
	window.TweenMax
);


