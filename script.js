// Theme toggle and mobile sidebar behavior
function initTheme() {
  var themeToggle = document.getElementById('themeToggle');
  var saved = localStorage.getItem('theme') || 'light';
  if(themeToggle) {
    if(saved === 'dark') { document.documentElement.classList.add('dark-mode'); themeToggle.textContent = '☀️'; }
    else { document.documentElement.classList.remove('dark-mode'); themeToggle.textContent = '🌙'; }

    themeToggle.addEventListener('click', function(){
      document.documentElement.classList.toggle('dark-mode');
      var isDark = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
  }
}

document.addEventListener('DOMContentLoaded', function(){
  initTheme();

  var navToggle = document.getElementById('navToggle');
  var sidebar = document.getElementById('sidebar');

  if(navToggle && sidebar) {
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      sidebar.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links and close sidebar on small screens
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if(window.innerWidth <= 700 && sidebar){
          sidebar.classList.remove('open');
          if(navToggle) navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });
});
