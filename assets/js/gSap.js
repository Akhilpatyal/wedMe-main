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