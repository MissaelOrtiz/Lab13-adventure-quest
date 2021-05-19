import quests from '../data/quests.js';
import { userCompletedAllQuests } from '../local-storage-utils.js';
if (userCompletedAllQuests()) {
    window.location = '../final';
}
const ul = document.querySelector('#quests');

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    ul.append(li);
}