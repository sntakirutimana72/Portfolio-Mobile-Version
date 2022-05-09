window.addEventListener("DOMContentLoaded", onReady);

function onReady() {
  const menuButton = document.getElementById("ham-button");
  menuButton.addEventListener('click', () => {
    document.querySelector('.menu-container').classList.remove('hidden');
  });

  const xButton = document.querySelector(".x-button");
  xButton.addEventListener('click', closeMenu);

  const refs = document.querySelectorAll(".menu-container a");
  refs.forEach(node => {
    node.onclick = () => closeMenu();
  })
}

function closeMenu() {
  document.querySelector('.menu-container').classList.add('hidden');
}
