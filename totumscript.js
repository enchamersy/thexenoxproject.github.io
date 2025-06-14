  window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
  });
window.addEventListener('scroll', function() {
  const footer = document.querySelector('footer');
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
});