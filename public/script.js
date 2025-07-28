
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle('hidden');

      const icon = question.querySelector('.toggle-icon');
      icon.classList.toggle('rotate-180');
    });
  });


  // Properties dropdown 
  function toggleButton() {
    const dropdownContent = document.querySelector('.drop-down');
    dropdownContent.classList.toggle('hidden');
  };
  function toggleButton2() {
    const dropdownContent = document.querySelector('.drop-down2');
    dropdownContent.classList.toggle('hidden');
  };
  function toggleButton3() {
    const dropdownContent = document.querySelector('.drop-down3');
    dropdownContent.classList.toggle('hidden');
  };
  function toggleButton4() {
    const dropdownContent = document.querySelector('.drop-down4');
    dropdownContent.classList.toggle('hidden');
  };

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.toggle-btn');
  const mobileNav = document.querySelector('.navigation-bar .absolute');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', function () {
      if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden', '-translate-y-full');
        mobileNav.classList.add('translate-y-0', 'flex');
      } else {
        mobileNav.classList.add('hidden', '-translate-y-full');
        mobileNav.classList.remove('translate-y-0', 'flex');
      }
    });

    // Close menu on link click
    const menuLinks = mobileNav.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileNav.classList.add('hidden', '-translate-y-full');
        mobileNav.classList.remove('translate-y-0', 'flex');
      });
    });
  }
});