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








const quests = [Crossroads, TavernFight];
export default quests;