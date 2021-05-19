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