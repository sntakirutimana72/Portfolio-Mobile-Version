function closeMenu() {
  document.querySelector('.menu-container').classList.toggle('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('ham-button');
  menuButton.addEventListener('click', () => closeMenu());

  const xButton = document.querySelector('.x-button');
  xButton.addEventListener('click', closeMenu);

  const refs = document.querySelectorAll('.menu-container a');
  refs.forEach((node) => {
    node.onclick = () => closeMenu();
  });
});
