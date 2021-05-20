import monsters from '../data/monsters.js';
import { findById } from '../utils.js';

export function getMonster() {
    const monsterId = Math.ceil(Math.random() * monsters.length);
    const baddy = findById(monsters, monsterId);
    return baddy;
}

export function battle(user, baddy) {
    if (baddy.ac <= user.atk) {
        user.gold = user.gold + baddy.gold;
        return `You win! You get ${baddy.gold} gold added to your purse`;

    } else if (user.ac < baddy.atk) {
        user.hp = user.hp - (baddy.atk - user.ac);
        return `You lose! You suck.`;
    } else {
        return `You exchange blows but then realize you have more in common than different and find love in a hopeless place`;
    }

}

// hero atk vs monster ac 
// if hero atk >= monster ac = hero gets monster gold
// if hero atk < monster ac = hero lose health of (monster atk - Hero ac)

// Hero encounters monster
// monster does damage to hero equal to (monster atk- Hero ac)
// if this causes the hero's hp <= 0 then take user to defeat screen 
// add monster gold to hero's gold 