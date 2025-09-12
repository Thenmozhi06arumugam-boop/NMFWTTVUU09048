// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if (!el) return;
    el.scrollIntoView({behavior:'smooth', block:'start'});
    // update focus for accessibility
    setTimeout(()=> el.querySelector('.card')?.focus?.(), 600);
  });
});

// IntersectionObserver to add 'visible' class for animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card').forEach(card => {
  // Make cards keyboard-focusable for accessibility
  card.setAttribute('tabindex','-1');
  observer.observe(card);
});

// small entrance animation for header title
window.addEventListener('load', ()=> {
  document.querySelector('header .title').style.transform = 'translateY(0)';
});