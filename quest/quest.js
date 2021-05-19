import quests from '../data/quests.js';
import { findById } from '../utils.js';

const main = document.querySelector('.main-section');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = findById(quests, questId);