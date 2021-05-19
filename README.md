## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

### HTML (character creator)
Inside a single form, we need:
    -an input
        -grabs user name
    -a radio button
        -grabs user class
    -submit button
        -to run the code
## Event
On clicking submit
    -grab all data
        -put data in local storage
            -completed quests
            -gold
            -hp
            -name
            -race
            -class

### HTML (quest map)
Need some kind of container <ul></ul>
    - acts as a place to inject our quests
    - we just need to go through our quest data and render out links to each quest.

### HTML (quest page)
Need some container to hold things <div>
    - dynamically (JS) generate content
## Event
On submit (when user picks an option)
    -show result of choice
    -update localstorage (new gold, new hp, new quest)
    -redirect to quest map

## HOME PAGE (character creation)
## MAP/LIST PAGE (DISPLAY ALL AVAILABLE QUESTS)
#   QUEST 1
        - Crossroads
            -AC bonus
            -HP bonus
#   QUEST 2
        - Red Caps EAT IT challenge: to get the item, they chuck rotten fruit, and tell you to EAT IT
        - Is disabled after one use
            a) EAT IT- you get the item, but have a tummy ache (-5 hp)
            b) Fight-
            c) Piss off- A hidden redcap robs you, you filthy coward, say goodbye to your gold
#   QUEST 3
        - Tavern thing
            a) Fight
                -Win: Win 10 gold, lose 5hp
                -Lose: Lose 5 gold, lose 10hp
            b) Bet
                -Win 5 gold
            c) Drink up, snitches
                -Gain 5hp
                -Lose 5 gold
#  SPECIAL: QUEST 4
        - Healer sanctuary- NPC heals you if you pay them enough gold
        - Is disabled after one use, so choose wisely, mamajamma
                - High cost, high heal
                - medium cost, medium heal
                - low cost, low heal
#   QUEST 5
        - Monster of the week: randomly generated naughty to fight
            -woofs
            -undead
            -butt spiders
            -wyvern
            -goblin mafia
## FINAL BOSS PAGE
    -Would have to complete 3 quests to fight him, complete all of them for a bonus for the fight
        -if quests.length >= 3, unlock final boss, AC/HP++ for each completed quest
    ~DA BOSS~
        -Win: You win, dishonor on the boss’ cow
        -Lose: you ded, dishonor on your cow