import "../assets/scss/style.scss";

const init = () => {
  const dataSrc = document.querySelectorAll('div[data-src]');
  const bgStyle = "background-image: url({url}); animation-name: fade; animation-duration: 1s";

  dataSrc.forEach((item) => {
    item.setAttribute('style', bgStyle.replace("{url}", item.getAttribute('data-src')));
  })
};

document.addEventListener('DOMContentLoaded', init);
