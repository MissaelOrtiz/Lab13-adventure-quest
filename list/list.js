import quests from '../data/quests.js';
import { getUser, userIsReadyForBoss } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';
const user = getUser();
renderHeader(user);

const ul = document.querySelector('#quests');
const finalButton = document.getElementById('final');

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    ul.append(li);
}

if (userIsReadyForBoss() === true) {
    finalButton.classList.toggle('hidden');
}
finalButton.addEventListener('click', () => {
    window.location.replace('../final/');
});