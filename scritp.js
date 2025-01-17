const paragraph = document.getElementById("hover-text");
const person = document.getElementById("a");
const person1 = document.getElementById("b");
const person2 = document.getElementById("c");
const scrollToTopBtn = document.getElementById('scrollToTop');

person.addEventListener("mouseover",function(){
  behavior: 'smooth'
  paragraph.textContent = "Tyler The Creator";
});
person1.addEventListener("mouseover",function(){
  behavior: 'smooth'
    paragraph.textContent = "Jeremy Meeks";
  });
person2.addEventListener("mouseover",function() {
  behavior: 'smooth'
    paragraph.textContent = "XXXTentacion";
  });
// Restore text when not hovering
person.addEventListener("mouseout", function() {
  behavior: 'smooth'
  paragraph.textContent = "Hover over this text to see the change!";
});
person1.addEventListener("mouseout", function() {
  behavior: 'smooth'
    paragraph.textContent = "Hover over this text to see the change!";
  });
  person2.addEventListener("mouseout", function() {
    behavior: 'smooth'
    paragraph.textContent = "Hover over this text to see the change!";
  });
  document.addEventListener('DOMContentLoaded', () => {
    scrollToTopBtn.style.display = 'block'; 
  });
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  });
 
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      scrollToTopBtn.style.opacity = 1; 
      scrollToTopBtn.style.pointerEvents = 'auto'; 
    } else {
      scrollToTopBtn.style.opacity = 0.5; 
      scrollToTopBtn.style.pointerEvents = 'none'; 
    }
  });