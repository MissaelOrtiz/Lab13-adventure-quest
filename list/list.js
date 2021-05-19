import quests from '../data/quests.js';
import { userCompletedAllQuests } from '../local-storage-utils';
if (userCompletedAllQuests()) {
    window.location = '../final';
}
const ul = document.querySelector('#quests');

for (let quest of quests) {
    const li = document.createAttribute('li');
    const a = document.createAttribute('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    ul.append(li);
}