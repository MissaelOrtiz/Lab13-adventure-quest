// import functions and grab DOM elements
const form = document.getElementById('the-stats');
// initialize state

// set event listeners 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const user = formData.get('username');
    const hero = formData.get('hero');
    
    window.location = './map';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
