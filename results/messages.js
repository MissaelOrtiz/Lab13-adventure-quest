// export const hpMessage = {
//     poor: 'You leave nothing' ,
//     modest: 'Your family is... fine',
//     rich: 'Your family is in the 1% yo',
// };

// // these are pure functions, as they take in a user and returns a string, bing bang boom
// function evaluateHealth(user) {
//     if (user.hp > 35) {
//         return 'healthy';
//     }
//     if (user.hp > 0) {
//         return 'frail';
//     }
//     return 'you dead';
// }

// function evaluateWealth(user) {
//     if (user.gold > 40) {
//         return 'rich';
//     }
//     if (user.gold > 20) {
//         return 'modest';
//     }
//     return 'you poor as hecc';
// }

// export function getEndingMessage(user) {
//     const health = evaluateHealth(user) {};
//     const wealth = evaluateWealth(user) {};

//     let wealthMessage;

//     if(user.hp <= 0) {
//         wealthMessage = deadGoldMessages[wealth];
//     } else {
//         wealthMessage = aliveGoldMessages[wealth];
//     }

//     return `Congrats, ${user.name} the ${user.class}! ${hpMessage[health]} and ${wealthMessage}`;
// }