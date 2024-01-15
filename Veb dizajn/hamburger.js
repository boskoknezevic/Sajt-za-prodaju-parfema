const nav = document.querySelector('.navLinkovi');
const otvorenMeni = document.querySelector('#otvoren');
const zatvorenMeni = document.querySelector('#zatvoren');

const otvoriMeni = () => {
    nav.style.display = 'flex';
    otvorenMeni.style.display = 'none';
    zatvorenMeni.style.display = 'inline-block';
}

otvoren.addEventListener('click', otvoriMeni);

const zatvoriMeni = () => {
    nav.style.display = 'none';
    otvorenMeni.style.display = 'inline-block';
    zatvorenMeni.style.display = 'none';
}

zatvoren.addEventListener('click', zatvoriMeni);