// Simple nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded',function(){
  var navToggle = document.getElementById('navToggle');
  var navList = document.querySelector('.nav-list');

  if(navToggle){
    navToggle.addEventListener('click',function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(navList.style.display === 'flex'){
        navList.style.display = '';
      } else {
        navList.style.display = 'flex';
      }
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav after click
        if(window.innerWidth <= 700 && navList){ navList.style.display = ''; navToggle.setAttribute('aria-expanded','false'); }
      }
    });
  });
});
