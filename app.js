import { setUser } from './local-storage-utils.js';

// import functions and grab DOM elements
const form = document.getElementById('the-stats');
// initialize state

// set event listeners 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const user = formData.get('username');
    const hero = formData.get('hero');
    

    const userObj = {
        name: user,
        class: hero,
        completed: {},
        hp: 25,
        ac: 5,
        atk: 6,
        gold: 25
    };
    setUser(userObj);


    window.location = './list';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
