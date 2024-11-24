const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
  // text.textContent = `カラーコード: ${color.value}`;
  document.body.style.backgroundColor = color.value;

  if (color.value === '#ffffff') {
    text.textContent = `カラーコード: ${color.value} (white)`;
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード: ${color.value} (black)`;
  }
};

color.addEventListener('input', colorBg);
