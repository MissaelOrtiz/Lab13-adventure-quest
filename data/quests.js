import { emptyGold } from '../local-storage-utils.js';

const Crossroads = {
    id: 'quest1',
    title: 'A Fey Friend at the Crossroads',
    map: {
        // SORT THIS OUT LATER
        top: '89%',
        left: '44%'
    },
    // sort this out later
    image: 'elf.jpg',
    description: `
        You come across a crossroads in the middle of the forest. There is an elven man who stands at the center of the crossroads dressed in green, a strange flower creature on his shoulder. He asks, "what do you want to improve about yourself?"
    `,
    choices: [{
        id: 'AC',
        description: 'I wish I was harder to hit!',
        result: `
            The elf works his weird magic, green energy swirling around you, your clothes growing a strange layer of moss and flowers that protect you. You gain a boon to your armor! 
        `,
        hp: 0,
        ac: 4,
        atk: 0,
        gold: 0
    }, {
        id: 'ATK',
        description: 'I wish I was better at hitting things!',
        result: `
            The elf works his weird magic, green energy swirling around your weapon; thorns and brambles cover your weapons. You gain a boon to your attack!
        `,
        hp: 0,
        ac: 0,
        atk: 4,
        gold: 0
    }, {
        id: 'HP',
        description: 'I wish I was harder to kill!',
        result: `
            The elf chuckles, 'don't we all'. You are filled with fey vigor, your life extending supernaturally. You gain a boon to your health!
        `,
        hp: 10,
        ac: 0,
        atk: 0,
        gold: 0
    }]
};

const TavernFight = {
    id: 'quest2',
    title: 'A squirrely evening at ye olde Publik House.',
    map: {
        // SORT THIS OUT LATER
        top: '89%',
        left: '44%'
    },
    // sort this out later
    image: 'tavern.jpg',
    description: `
        You walk into a tavern and shit is bananas.
    `,
    choices: [{
        id: 'FIGHT',
        description: 'What you say bout my mama?',
        result: `
            You win 10 gold, lose 5 HP 
        `,
        hp: -5,
        ac: 0,
        atk: 0,
        gold: 10
    }, {
        id: 'BET',
        description: '5 Gold on the stubby dude.',
        result: `
            Stubby dude comes through!  Win 5 gold!
        `,
        hp: 0,
        ac: 0,
        atk: 0,
        gold: 5
    }, {
        id: 'DRINK',
        description: 'BAR KEEP!',
        result: `
            The bar keep slides a mug of ale to you for 2 gold and you drink the liquid courage!  *glug-glug*
        `,
        hp: 0,
        ac: 0,
        atk: 2,
        gold: -2
    }]
};

const Healer = {
    id: 'quest3',
    title: 'The good witch of Barheim offers to heal you!',
    map: {
        // SORT THIS OUT LATER
        top: '89%',
        left: '44%'
    },
    // sort this out later
    image: 'Healer.jpg',
    description: `
        You find a large cottage mounted ontop of giant chicken legs, a cluster of grey clouds decorating the top of the cottage. Entering the house, you are greeted by Amelia Silverwind, the good witch and her familiar, Vaati the jacklope. 'Hello! Won't you look at my wares?'
    `,
    choices: [{
        id: 'SMALL',
        description: 'This potion is a small elixir of life [5 gold]',
        result: `
            You drink the elixir, your minor wounds regenerate at a rapid pace!
        `,
        hp: 5,
        ac: 0,
        atk: 0,
        gold: -5
    }, {
        id: 'MEDIUM',
        description: 'This potion is a medium elixir of life [10 gold]',
        result: `
            You drink the elixir, your moderate wounds regenerate at a rapid pace!
        `,
        hp: 10,
        ac: 0,
        atk: 0,
        gold: -10
    }, {
        id: 'MAJOR',
        description: 'This potion is a major elixir of life [15 gold]',
        result: `
            You drink the elixir, your severe wounds regenerate at a rapid pace!
        `,
        hp: 15,
        ac: 0,
        atk: 0,
        gold: -15
    }, {
        id: 'STR',
        description: 'This potion is a potion of strength [10 gold]',
        result: `
            You quaff this strange brew, feeling your body and spirit grow stronger!
        `,
        hp: 0,
        ac: 0,
        atk: 2,
        gold: -15
    }]
};

const Redcap = {
    id: 'quest4',
    title: 'Raving Redcap Rumble',
    map: {
        // SORT THIS OUT LATER
        top: '89%',
        left: '44%'
    },
    // sort this out later
    image: 'redcap.jpg',
    description: `
        Your path is blocked by a crumbly, decaying cabin that is guarded by a gang of redcaps who excitedly chitter and cackle at you from atop the roof. 'Pass our test to continue on the path,' screams one particulalry ugly redcap. The other redcaps start yeeting rotten fruit at you, which you narrowly dodge as they all repeatedly shout 'EAT IT!'
    `,
    choices: [{
        id: 'EATIT',
        description: 'Eat the rotten fruit',
        result: `
            Well, you've had worse! You eat the rotten fruit, getting more and more nauseous with each piece. You yarf off on their doorstep, and they taunt you and let you pass, a little worse for wear.
        `,
        hp: -5,
        ac: 0,
        atk: 0,
        gold: 0
    }, {
        id: 'FIGHT',
        description: 'Challenge these punks to a battle',
        result: `
            You dispatch them easily, but they did stab you in the shins a few times. To add insult to their injuries, you rob that jerk who first yelled at you. You gain 10 gold plus a neat hat!
        `,
        hp: -5,
        ac: 0,
        atk: 0,
        gold: 10
    }, {
        id: 'FLEE',
        description: 'Ignore these bozos and find another path',
        result: `
            You think you are sooooo clever, finding a new path. Unfortunately they saw that coming. You get ambushed by another gang of redcaps, who munge your gold. All of it. Sucker.
        `,
        hp: 0,
        ac: 0,
        atk: 2,
        gold: -`${emptyGold()}`
    }]
};

// const Monsters = {
//     id: 'quest5',
//     title: 'A foe approaches',
//     current: getMonster(),
//     map: {
//         // SORT THIS OUT LATER
//         top: '89%',
//         left: '44%'
//     },
//     image: this.current.image,
//     description: 
//     this.current.description
// };

const quests = [Crossroads, TavernFight, Healer, Redcap];

export default quests;