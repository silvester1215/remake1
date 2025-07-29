const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const card = document.querySelector('.article-card');
const gap = 16;

function getScrollStep() {
  const cardWidth = card.offsetWidth;
  const visibleCards = Math.floor(track.clientWidth / (cardWidth + gap));
  return (cardWidth + gap) * visibleCards;
}

let scrollAmount = 0;

leftArrow.addEventListener('click', () => {
  scrollAmount = Math.max(scrollAmount - getScrollStep(), 0);
  track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  const maxScroll = track.scrollWidth - track.clientWidth;
  scrollAmount = Math.min(scrollAmount + getScrollStep(), maxScroll);
  track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});
