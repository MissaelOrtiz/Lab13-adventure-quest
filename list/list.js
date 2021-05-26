import quests from '../data/quests.js';
import { getUser, userIsReadyForBoss, userDied } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';
const user = getUser();
renderHeader(user);

const ul = document.querySelector('#quests');
const finalButton = document.getElementById('final');

for (let quest of quests) {
    const questIsCompleted = user.completed[quest.id];
    const li = document.createElement('li');
    
    if (!questIsCompleted) {
        const a = document.createElement('a');
        a.href = `../quest/?id=${quest.id}`;
        a.textContent = quest.title;
        li.append(a);
    } else {
        const span = document.createElement('span');
        span.style.textDecoration = 'line-through';
        span.textContent = quest.title;
        li.append(span);
    }
    ul.append(li);
}

if (userIsReadyForBoss() === true) {
    finalButton.classList.toggle('hidden');
}

finalButton.addEventListener('click', () => {
    window.location.replace('../final/');
});

if (userDied() === true) {
    window.location = '../final';
}