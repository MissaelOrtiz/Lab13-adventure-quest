//because i pass in a user and return a div, with no side fx and no dependence on locStor, this is now a PURE function, so it's easier to test
export function makeHeaderDiv(user) {
    //grab header form DOM
    //make a div to inject into the header
    //make p tags to inject into div
    //apend this div to the header

    // const user = getUser();

    // const header = document.createElement('header');
    const div = document.createElement('div');
    const nameP = document.createElement('p');
    const hpP = document.createElement('p');
    const goldP = document.createElement('p');
    
    nameP.textContent = `Hero: ${user.name}`;
    hpP.textContent = `HP: ${user.hp}`;
    goldP.textContent = `Gold: ${user.gold}`;

    div.append(nameP, hpP, goldP);

    // header.append(div);
    return div;
}

export function renderHeader(user) {
    const header = document.querySelector('header');

    const div = makeHeaderDiv(user);
    header.append(div);
}