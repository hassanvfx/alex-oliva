const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const search = document.querySelector('[data-contract-search]');
const corpus = document.querySelector('[data-contract-corpus]');
if (search && corpus) {
  const original = corpus.innerHTML;
  search.addEventListener('input', () => {
    const query = search.value.trim();
    if (query.length < 3) {
      corpus.innerHTML = original;
      return;
    }
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    corpus.innerHTML = original.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
  });
}

document.querySelectorAll('[data-print]').forEach((button) => {
  button.addEventListener('click', () => window.print());
});
