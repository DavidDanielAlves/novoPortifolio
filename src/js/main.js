const btMaisConquistas = document.querySelector('#more-wins');
const listaMaisConquistas = document.querySelector('.container-more-wins');

btMaisConquistas.addEventListener('click', () => {
    listaMaisConquistas.classList.toggle('hide');
})