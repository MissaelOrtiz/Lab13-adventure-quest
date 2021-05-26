import quests from '../data/quests.js';
import { findById } from '../utils.js';
import { changeGold, changeHp, changeAc, changeAtk, completeQuest } from '../local-storage-utils.js';
import { getUser } from '../local-storage-utils.js';
import { changeHeader, renderHeader, makeHeaderDiv } from '../render-header.js';

let user = getUser();
renderHeader(user);
makeHeaderDiv(user);

const main = document.querySelector('.main-section');
const body = document.querySelector('body');
const actMain = document.querySelector('main');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = findById(quests, questId);


const h1 = document.createElement('h1');
const img = document.createElement('img');
const p = document.createElement('p');
const form = document.createElement('form');
h1.textContent = quest.title;
h1.classList.add(`${quest.id}`);
img.src = `../assets/${quest.image}`;
img.classList.add(`${quest.id}`);
p.textContent = quest.description;
p.classList.add(`${quest.id}`);
form.classList.add(`${quest.id}`);
body.classList.add(`${quest.id}`);
main.classList.add(`${quest.id}`);
actMain.classList.add(`${quest.id}`);

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = choice.id;
    label.append(choice.description, input);
    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Make the choice!';
form.append(button);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    const selectedChoice = findById(quest.choices, choiceId);
    changeGold(selectedChoice.gold);
    changeHp(selectedChoice.hp);
    changeAc(selectedChoice.ac);
    changeAtk(selectedChoice.atk);
    changeHeader(user);
    const resultsDiv = document.createElement('div');
    const redirectButton = document.createElement('button');
    redirectButton.textContent = 'continue with my quest!';
    redirectButton.addEventListener('click', () => {
        window.location = '../list';
        
    });
    resultsDiv.textContent = selectedChoice.result;
    resultsDiv.appendChild(redirectButton);
    form.remove();
    main.append(resultsDiv);
    completeQuest(quest.id);
});
main.append(h1, img, p, form);
