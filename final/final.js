import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-header.js';
let user = getUser();
renderHeader(user);

const finalButton = document.getElementById('last');

finalButton.addEventListener('click', () => {
    
});