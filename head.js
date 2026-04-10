// Navigation for the dashboard buttons
document.addEventListener('DOMContentLoaded', function () {
  // Handle navigation buttons from cards
  document.querySelectorAll('.open-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // Animation: fade out
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = btn.getAttribute('data-target');
      }, 180);
    });
  });

  // Animation: support fade-in class on body
  document.body.classList.add('fade-in');

  // OPTIONAL: Add fade effect classes
  let style = document.createElement('style');
  style.innerHTML = `
    .fade-out { opacity: 0; transition: opacity .18s;}
    .fade-in { opacity: 1; transition: opacity .3s;}
  `;
  document.head.appendChild(style);

  // BACK BUTTON for project pages
  if (document.querySelector('.back-btn')) {
    document.querySelector('.back-btn').addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '../head.html';
      }, 180);
    });
  }
});

