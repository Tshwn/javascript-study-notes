const getScrollPercent = () => {
  const scrolled = window.scrollY;
  console.log(`${scrolled} スクロールされました`);

  const pageHeight = document.documentElement.scrollHeight;
  const viewHeight = document.documentElement.clientHeight;

  const percentage = (scrolled / (pageHeight - viewHeight)) * 100;
  // console.log(`${percentage}%`);
  document.querySelector('#bar').style.width = `${percentage}%`;
};

window.addEventListener('scroll', getScrollPercent);
