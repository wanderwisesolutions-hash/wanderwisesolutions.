
document.addEventListener('DOMContentLoaded',function(){
  // Nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle && navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); }
    });
  },{threshold:0.12});

  document.querySelectorAll('.service-card, .hero-inner, .about, .process, .contact').forEach(el=> observer.observe(el));

  // Fake contact handler (client only)
  window.handleContact = function(e){
    e.preventDefault();
    const form = e.target;
    const data = {name: form.name.value, email: form.email.value, country: form.country.value, message: form.message.value };
    alert('Thanks ' + data.name + '! We received your message — (demo mode).\nWe would normally send this to hello@wanderwise.com');
    form.reset();
    return false;
  };
});
