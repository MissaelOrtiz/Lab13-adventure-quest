
export function getUser() {
    const stringyuser = localStorage.getItem('USER');
    if (!stringyuser) return {};
    const user = JSON.parse(stringyuser);
    return user;
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}

export function changeGold(someGoldValue) {
    const user = getUser();
    user.gold = user.gold + someGoldValue;
    setUser(user);
}

export function emptyGold() {
    const user = getUser();
    return user.gold;
}

export function changeHp(someHPValue) {
    const user = getUser();
    user.hp = user.hp + someHPValue;
    setUser(user);
}

export function changeAc(someACValue) {
    const user = getUser();
    user.ac = user.ac + someACValue;
    setUser(user);
}

export function changeAtk(someATKValue) {
    const user = getUser();
    user.atk = user.atk + someATKValue;
    setUser(user);
}

export function completeQuest(questId) {
    const user = getUser();
    user.completed[questId] = true;
    setUser(user);
}

// export function userCompletedAllQuests() {
//     const user = getUser();
//     // return Object.keys(user.completed).length === quests.length;
//     for (let quest of quests) {
//         if (!user.completed[quest.id]) return false;
//     }
//     return true;
// }

export function userDied() {
    const user = getUser();
    if (user.hp <= 0) return true;
    return false;
}