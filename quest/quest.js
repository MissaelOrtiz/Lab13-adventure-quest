import quests from '../data/quests.js';
import { findById } from '../utils.js';
import { changeGold, changeHp } from '../local-storage-utils.js';

const main = document.querySelector('.main-section');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = findById(quests, questId);


const h1 = document.createElement('h1');
const img = document.createElement('img');
const p = document.createElement('p');

const form = document.createElement('form');
const button = document.createElement('button');
button.textContent = 'Make the choice!';
h1.textContent = quest.title;
img.src = `../assets/${quest.img}`;
p.textContent = quest.description;
for (let choice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = choice.id;
    label.append(choice.description, input);
    form.append(label);
}
form.append(button);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    const selectedChoice = findById(quest.choices, choiceId);
    changeGold(selectedChoice.gold);
    changeHp(selectedChoice.hp);
    const resultsDiv = document.createElement('div');
    const redirectButton = document.createElement('button');
    redirectButton.textContent = 'continue with my quest!';
    redirectButton.addEventListener('click', () => {
        window.location = '../list';
        
    });
    resultsDiv.textContent = selectedChoice.result;
    resultsDiv.appendChild(button);
    form.remove();
    main.append(resultsDiv);
    
});
main.append(h1, img, p);