import monsters from './data/monsters.js';
import { findById } from './utils.js';

export function getMonster() {
    const monsterId = Math.floor(Math.random() * monsters.length);

    const baddy = findById(monsters, monsterId);

    return baddy;
}

export function battle(user, baddy) {
    if (baddy.ac <= user.atk) {
        user.gold = user.gold + baddy.gold;
    } else {
        user.hp = user.hp - (baddy.atk - user.ac);
    }

}

// hero atk vs monster ac 
// if hero atk >= monster ac = hero gets monster gold
// if hero atk < monster ac = hero lose health of (monster atk - Hero ac)

// Hero encounters monster
// monster does damage to hero equal to (monster atk- Hero ac)
// if this causes the hero's hp <= 0 then take user to defeat screen 
// add monster gold to hero's gold 