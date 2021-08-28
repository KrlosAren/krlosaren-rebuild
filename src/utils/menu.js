export const menu = () => {
  const mainContainer = document.getElementById('main__container');
  const menuContainer = document.getElementById('menu');
  const footerContainer = document.getElementById('container__footer');

  console.log('menu open');
  mainContainer.classList.toggle('hidden');
  menuContainer.classList.toggle('hiddenMenu');
  footerContainer.classList.toggle('hidden');
};
