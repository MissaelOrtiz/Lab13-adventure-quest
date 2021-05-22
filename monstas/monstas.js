import { getUser, setUser } from '../local-storage-utils.js';
import { getMonster, battle } from './render-monster-utils.js';
import { changeHeader, renderHeader } from '../render-header.js';
const user = getUser();
renderHeader(user);




const coolZone = document.getElementById('main-section');
const baddy = getMonster();

const h1 = document.createElement('h1');
const monstaImage = document.createElement('img');
const description = document.createElement('p');
const buttonContainer = document.createElement('div');

const fightButton = document.createElement('button');
const fleeButton = document.createElement('button');

h1.textContent = baddy.name;
monstaImage.src = `../assets/${baddy.image}`;
description.textContent = baddy.description;
fightButton.textContent = 'Fight this weirdo';
fleeButton.textContent = 'Run awaaaaaay!';
buttonContainer.classList.add('buttons');

fightButton.addEventListener('click', () => {
    const user = getUser();
    const outcome = battle(user, baddy);
    setUser(user);
    description.textContent = outcome;
    changeHeader(user);
    setTimeout(() => window.location = '../list', 2000);
});

fleeButton.addEventListener('click', () => {
    window.location = '../list';
});

buttonContainer.append(fightButton, fleeButton);
coolZone.append(h1, monstaImage, description, buttonContainer);