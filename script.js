// Theme toggle functionality
function initTheme() {
  var themeToggle = document.getElementById('themeToggle');
  var savedTheme = localStorage.getItem('theme') || 'light';
  
  if(savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
  
  if(themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark-mode');
      var isDarkMode = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    });
  }
}

// Simple nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded',function(){
  initTheme();
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
