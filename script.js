// copyright year update lol
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Back to Top Button Logic
const backToTop = document.getElementById('backToTop');

//when does button show up
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

//scroll function copied from online
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});