const progress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', ()=> {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress.value = scrolled;
}, {
  capture: true,
  passive: true
});

window.onload = () => {
  window.scrollTo(0, 1000);
}