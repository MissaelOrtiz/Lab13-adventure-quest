import { getUser, userDied } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';
let user = getUser();
renderHeader(user);

const finalButton = document.getElementById('last');
const playagainButton = document.getElementById('play-again');

finalButton.addEventListener('click', () => {
    const main = document.querySelector('main');
    const section = document.querySelector('section');
    const header = document.querySelector('header');
    const div = document.querySelector('.munge');
    header.removeChild(div);
    main.removeChild(section);

    const newSection = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    const statdiv = document.createElement('div');
    const pHP = document.createElement('p');
    const pAC = document.createElement('p');
    const pATK = document.createElement('p');
    const pGP = document.createElement('p');

    h1.textContent = `Congrats, ${user.name}!`;
    p.textContent = `You have defeated the evil overlord of Barheim and restored peace to the lands! YOU WON! You completed your adventure with the following stats:`;
    pHP.textContent = `HP: ${user.hp}`;
    pAC.textContent = `AC: ${user.ac}`;
    pATK.textContent = `Attack: ${user.atk}`;
    pGP.textContent = `Gold: ${user.gold}`;

    statdiv.append(pHP, pAC, pATK, pGP);
    newSection.append(h1, p, statdiv);
    main.append(newSection);
    playagainButton.classList.toggle('hidden');
});

if (userDied() === true) {
    const main = document.querySelector('main');
    const section = document.querySelector('section');
    const header = document.querySelector('header');
    const div = document.querySelector('.munge');
    header.removeChild(div);
    main.removeChild(section);

    const newSection = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    const statdiv = document.createElement('div');
    const pHP = document.createElement('p');
    const pAC = document.createElement('p');
    const pATK = document.createElement('p');
    const pGP = document.createElement('p');

    h1.textContent = `You died, ${user.name}!`;
    p.textContent = `You have been killed by some terrible monstrosity! YOU LOST! You ended your adventure with the following stats:`;
    pHP.textContent = `HP: ${user.hp}`;
    pAC.textContent = `AC: ${user.ac}`;
    pATK.textContent = `Attack: ${user.atk}`;
    pGP.textContent = `Gold: ${user.gold}`;

    statdiv.append(pHP, pAC, pATK, pGP);
    newSection.append(h1, p, statdiv);
    main.append(newSection);
    playagainButton.classList.toggle('hidden');
}

playagainButton.addEventListener('click', () => {
    localStorage.removeItem('USER');
    window.location = '../';
});