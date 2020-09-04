const sortSection = document.querySelector('.sort'),
  sortImg = sortSection.querySelector('.sort-img'),
  mobImg = sortImg.getAttribute('data-mob-src'),
  desckImg = sortImg.getAttribute('src');

document.body.clientWidth < 1081 ? sortImg.setAttribute('src', mobImg) : true;

window.addEventListener('resize', () => {
  document.body.clientWidth < 1081 ? sortImg.setAttribute('src', mobImg) : sortImg.setAttribute('src', desckImg);
});