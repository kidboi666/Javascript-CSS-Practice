const header = document.querySelector('header');
const nav = document.querySelector('nav')

header.addEventListener('mouseover', function() {
  header.style.height = '270px';
})
header.addEventListener('mouseleave', function() {
  header.style.height = '50px';
})