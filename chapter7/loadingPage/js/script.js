const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

const keyframes = {
  opacity: [1, 0],
  visibility: 'hidden',
};

const options = {
  duration: 2000,
  delay: 1200,
  easing: 'ease',
  fill: 'forwards',
};

window.addEventListener('load', () => {
  loadingAreaGrey.animate(keyframes, options);

  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh'],
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8,
      },
      {
        opacity: 0,
        offset: 1,
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

// 画像ギャラリー

const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({ opacity: [0, 1] }, 500);
  });
});
