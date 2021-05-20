import { getEndingMessage } from './messages.js';
import { getUser } from '../local-storage-utils.js';import { renderHeader } from '../render-header.js';

const user = getUser();

renderHeader(user);

const resultsP = document.querySelector('#results');

getEndingMessage(user);

resultsP.textContent = getEndingMessage(user);