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





const quests = [Crossroads];
export default quests;