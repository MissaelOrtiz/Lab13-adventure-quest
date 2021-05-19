export function findById(someArr, ID) {
    for (let item of someArr) {
        if (item.id === ID) {
            return item;
        }
    }
}