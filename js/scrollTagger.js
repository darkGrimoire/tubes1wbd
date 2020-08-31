let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };
let elementsToShow = document.querySelectorAll('.animate-scroll');

const isElementInViewport = el => {
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

const loop = () => {
  elementsToShow.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('seen');
    } else {
      element.classList.remove('seen');
    }
  });
  scroll(loop);
}

loop();