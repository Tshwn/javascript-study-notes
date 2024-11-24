const heading = document.querySelector('#heading');

const keyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
  // rotate: ['x 360deg', 0],
  color: ['#f66', '#fc2', '#0c6', '#0bd'],
};

const options = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};
heading.animate(keyframes, options);