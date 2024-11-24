const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity: [0, 1],
    // rotate: ['x 90deg', 0],
    translate: ['0 -50px', 0],
    // translate 0が横 50pxが縦, ,0は移動後の値
  };

  const options = {
    duration: 600,
    delay: i * 500,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}
