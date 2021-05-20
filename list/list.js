import quests from '../data/quests.js';

const ul = document.querySelector('#quests');

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    ul.append(li);
}